---
sidebar_position: 1
---

# Technical content

## Backend

- Architecture:
    - Java SpringBoot
    - Our backend was developed using microservices design
    - Divided in 4 components: discovery service, api gateway, auth server and service
        - Discovery service using Eureka server for clients application registration
        - API Gateway to manage requests for specifc resources and load balancing
        - Auth Server to authenticate and authorize the users
        - Service to provide the resource