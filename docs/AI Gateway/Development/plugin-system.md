---
sidebar_position: 3
---





# Plugin System

Available plugins:
- ```rate_limiter```: Rate limiting functionality.
- ```content_validator```: Request/response content validation
- ```security_validator```: Security checks and validations.

Plugin stages:

    - ```pre_request```: Before forwarding.
    - ```post_request```: After forwarding, before response.  
    - ```pre_response```: Before sending response.
    - ```post_response```: After sending response.

