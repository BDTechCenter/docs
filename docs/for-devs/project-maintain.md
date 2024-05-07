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