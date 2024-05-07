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

## Step by step
### Tools
- Specification:
    - Java: version 17
    - Spring Boot: version 3.2.5
    - Spring Cloud: version 2023.0.1

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
            - set the envs on the application file
        - docker: when you need to up an stable instace
            - set the envs on docker-compose file