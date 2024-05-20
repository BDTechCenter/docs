---
sidebar_position: 2
---

# Backend

- Architecture:
    - Java SpringBoot
    - Our backend was developed using microservices design
    - Divided in 4 components: discovery service, api gateway, auth server and service
        - Discovery service using Eureka server for clients application registration
        - API Gateway to manage requests for specifc resources and load balancing
        - Auth Server to authenticate and authorize the users
        - Service to provide the resource

    - Architeture Proposal:
        ![Software Architeture Proposal](./img/SoftwareArchitectureDiagram.drawio.png)

- Stack: 
    - Java 17
    - SpringBoot 3.2.3
    - Spring Cloud 2023.0.0
    - Eureka Server / Client
    - Postgres 16
    - Spring-Dotenv 4.0.0
    