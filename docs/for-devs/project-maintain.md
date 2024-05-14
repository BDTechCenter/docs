---
sidebar_position: 1
---

# Project Maintain

## How can you contribute?
As was explained in [project architeture](../technical-content.md#backend) 
your backend was developed using microservices design. 

And luckily for those who will contribute to this project, 
our team prepared a pre-configured project with the specifications followed during development.

You can find the source code by [clicking here](https://github.com/BDTechCenter/service-example)!

## Main rules
### Tools
- Specification:
    - Java: version 17
    - Spring Boot: version 3.2.5
    - Spring Cloud: version 2023.0.1

### ENV
You need to have ``.env`` file at the root path of the project.

You will find the content of .env file at the ``.env.example`` also at the root of the project

e.g. of ``.env``
```
AUTHORIZATION_URI=
TOKEN_URI=
JWK_SET_URI=

CLIENT_ID=
CLIENT_SECRET=
```
> Contact BEU7CA, TOA3CA, PLU6CA or CJS2CA to get the Microsoft EntraID env values.

### Resources
Our team chose to use ``.yaml`` extension for the application files and multiple profiles: ``local`` and ``docker``
    
    e.g. how can you choose the current profile

    ```yaml
    spring:
      profiles:
        active: docker
    ```

    The differences between local and docker profiles is
        - local: used when you are running the project in your own machine
            - set the db and eureka url on the application file
        - docker: when you need to up an stable instace
            - set the db and eureka url on docker-compose file

### Configuration
The application is using Microsoft EntraID for authorization and authentication,
by ``OAuth2`` and ``OpenID`` protocols, so we need to configure spring security 

You will find the java file following the path below:
- service
    - infra
        - configs
            - SecurityConfig.java

#### SecurityConfig.java
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${spring.security.oauth2.client.provider.azure-ad.jwk-set-uri}")
    private String jwkSetUri; // microsoft json web key (jwk) for token decode

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .cors(cors -> cors.disable())
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(req -> req
                        .anyRequest().authenticated()) // requires authentication for all requests
                .oauth2ResourceServer(conf -> conf
                        .jwt(jwt -> jwt.decoder(jwtDecoder())) // config the authentication type
                );

        return http.build();
    }

    // with the Microsoft EntraID JWK configure the JWT decoder
    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withJwkSetUri(jwkSetUri).build();
    }

}
```

### Dev rules

#### SRP (Single Responsibility Principle)

In the development of this project we followed and applied some of the SOLID concepts.
Let's give a practical example of this application with the concept of SRP for API development.

##### Controller
```java
@RestController
@RequestMapping("/example")
public class ExampleController {

    @Autowired
    private ExampleService exampleService;

    @PostMapping("/user")
    public ResponseEntity<UserDto> saveUserExample(
            @AuthenticationPrincipal Jwt tokenJWT
    ) {
        UserDto user = exampleService.saveUserToDB(tokenJWT);
        return ResponseEntity.ok(user);
    }
}
```
> Note that the control class injects only the ``service`` class and that class calls your respective function to perform the db transaction.

#### Service
```java
@Service
public class ExampleService {

    @Autowired
    private ExampleRepository exampleRepository;

    public UserDto saveUserToDB(Jwt tokenJWT) {
        UserDto userDto = new UserDto(tokenJWT);
        UserExample user = new UserExample(userDto);
        exampleRepository.save(user);

        return userDto;
    }
}
```
> Here is the ``service`` class implementation example. This class who must receive the injection of the ``repository`` class for the db transaction.

If you need to use auxiliary functions within the service class, create a Handler class and inject it into the service


#### Exception Handler (HTTP codes)
Create your own exceptions to use within validations and treat the http code returned when launching this exception

##### Custom Exception
```java
public class ExampleException extends RuntimeException{
    public ExampleException(String message) {
        super(message);
    }

    public ExampleException() {
        super("Default message");
    }
}
```
> You can use different constructors

The above file need to be placed at directory:
- infra
    - exception
        - validation

##### Error Handler
```java
@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity error404Handler() {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(ExampleException.class)
    public ResponseEntity<ValidationErrorData> exampleExceptionHandler(
        ExampleException exception
    ) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
            .body(new ValidationErrorData(
                "some field", exception.getMessage()
            )
        );
    }
}
```
> Handle each of the possible exceptions thrown

The above file need to be placed at directory:
- infra
    - exception
        - error