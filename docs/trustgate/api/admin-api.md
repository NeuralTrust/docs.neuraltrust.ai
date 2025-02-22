---
title: Admin API
description: API Reference for TrustGate Admin API
---

import ApiDocs from '@theme/ApiDocs';

# Admin API Reference

<ApiDocs
  spec={{
    openapi: '3.0.0',
    info: {
      title: 'TrustGate Admin API',
      version: '1.0.0',
      description: 'API for managing TrustGate gateways, rules, and configurations'
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local Development'
      }
    ],
    paths: {
      '/api/v1/gateways': {
        post: {
          summary: 'Create Gateway',
          description: 'Create a new gateway instance with specified configuration',
          tags: ['Gateways'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name'],
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the gateway'
                    },
                    required_plugins: {
                      type: 'array',
                      items: {
                        type: 'object',
                        required: ['name', 'enabled'],
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Plugin name'
                          },
                          enabled: {
                            type: 'boolean',
                            description: 'Whether the plugin is enabled'
                          },
                          settings: {
                            type: 'object',
                            description: 'Plugin-specific settings'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Gateway created successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Gateway ID'
                      },
                      name: {
                        type: 'string',
                        description: 'Gateway name'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        get: {
          summary: 'List Gateways',
          description: 'Get a list of all configured gateways',
          tags: ['Gateways'],
          responses: {
            '200': {
              description: 'List of gateways',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          description: 'Gateway ID'
                        },
                        name: {
                          type: 'string',
                          description: 'Gateway name'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}': {
        get: {
          summary: 'Get Gateway',
          description: 'Get details of a specific gateway',
          tags: ['Gateways'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          responses: {
            '200': {
              description: 'Gateway details',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Gateway ID'
                      },
                      name: {
                        type: 'string',
                        description: 'Gateway name'
                      },
                      required_plugins: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            name: {
                              type: 'string',
                              description: 'Plugin name'
                            },
                            enabled: {
                              type: 'boolean',
                              description: 'Plugin enabled status'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        put: {
          summary: 'Update Gateway',
          description: 'Update an existing gateway configuration',
          tags: ['Gateways'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway to update'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'New gateway name'
                    },
                    required_plugins: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Plugin name'
                          },
                          enabled: {
                            type: 'boolean',
                            description: 'Plugin enabled status'
                          },
                          settings: {
                            type: 'object',
                            description: 'Plugin settings'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'Gateway updated successfully'
            }
          }
        },
        delete: {
          summary: 'Delete Gateway',
          description: 'Delete a gateway and all its configurations',
          tags: ['Gateways'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway to delete'
            }
          ],
          responses: {
            '204': {
              description: 'Gateway deleted successfully'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/upstreams': {
        post: {
          summary: 'Create Upstream',
          description: 'Create a new upstream for a gateway',
          tags: ['Upstreams'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'targets'],
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the upstream'
                    },
                    algorithm: {
                      type: 'string',
                      description: 'Load balancing algorithm',
                      default: 'round-robin'
                    },
                    health_checks: {
                      type: 'object',
                      description: 'Health check configuration',
                      properties: {
                        // Add health check properties here
                      }
                    },
                    tags: {
                      type: 'object',
                      description: 'Custom tags for the upstream'
                    },
                    targets: {
                      type: 'array',
                      items: {
                        type: 'object',
                        required: ['provider', 'credentials', 'models', 'default_model'],
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Target ID (auto-generated if not provided)'
                          },
                          weight: {
                            type: 'integer',
                            description: 'Load balancing weight'
                          },
                          priority: {
                            type: 'integer',
                            description: 'Failover priority'
                          },
                          tags: {
                            type: 'object',
                            description: 'Custom tags for the target'
                          },
                          headers: {
                            type: 'object',
                            description: 'Custom headers to add to requests'
                          },
                          path: {
                            type: 'string',
                            description: 'Base path for the target'
                          },
                          host: {
                            type: 'string',
                            description: 'Target host (required if not using provider)'
                          },
                          port: {
                            type: 'integer',
                            description: 'Target port (required if not using provider)'
                          },
                          protocol: {
                            type: 'string',
                            enum: ['http', 'https'],
                            description: 'Protocol to use (required if not using provider)'
                          },
                          provider: {
                            type: 'string',
                            description: 'AI provider name (e.g., openai, anthropic)'
                          },
                          models: {
                            type: 'array',
                            items: {
                              type: 'string'
                            },
                            description: 'List of supported models for this provider'
                          },
                          default_model: {
                            type: 'string',
                            description: 'Default model to use when none is specified'
                          },
                          credentials: {
                            type: 'object',
                            description: 'Provider-specific credentials'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Upstream created successfully'
            }
          }
        },
        get: {
          summary: 'List Upstreams',
          description: 'List all upstreams for a gateway',
          tags: ['Upstreams'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'offset',
              in: 'query',
              schema: {
                type: 'integer',
                default: 0
              },
              description: 'Pagination offset'
            },
            {
              name: 'limit',
              in: 'query',
              schema: {
                type: 'integer',
                default: 10,
                maximum: 100
              },
              description: 'Number of items per page'
            }
          ],
          responses: {
            '200': {
              description: 'List of upstreams'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/upstreams/{upstream_id}': {
        get: {
          summary: 'Get Upstream',
          description: 'Get details of a specific upstream',
          tags: ['Upstreams'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'upstream_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the upstream'
            }
          ],
          responses: {
            '200': {
              description: 'Upstream details'
            }
          }
        },
        put: {
          summary: 'Update Upstream',
          description: 'Update an existing upstream configuration',
          tags: ['Upstreams'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'upstream_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the upstream'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the upstream'
                    },
                    targets: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          url: {
                            type: 'string',
                            description: 'Target URL'
                          },
                          weight: {
                            type: 'integer',
                            description: 'Load balancing weight'
                          },
                          priority: {
                            type: 'integer',
                            description: 'Failover priority'
                          },
                          headers: {
                            type: 'object',
                            description: 'Custom headers to add to requests'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'Upstream updated successfully'
            }
          }
        },
        delete: {
          summary: 'Delete Upstream',
          description: 'Delete an upstream',
          tags: ['Upstreams'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'upstream_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the upstream'
            }
          ],
          responses: {
            '204': {
              description: 'Upstream deleted successfully'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/services': {
        post: {
          summary: 'Create Service',
          description: 'Create a new service for a gateway',
          tags: ['Services'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'type'],
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the service'
                    },
                    type: {
                      type: 'string',
                      enum: ['upstream', 'endpoint'],
                      description: 'Type of service (upstream: uses upstream configuration, endpoint: direct configuration)'
                    },
                    description: {
                      type: 'string',
                      description: 'Description of the service'
                    },
                    tags: {
                      type: 'object',
                      description: 'Custom tags for the service'
                    },
                    // Upstream configuration
                    upstream_id: {
                      type: 'string',
                      description: 'ID of the upstream to use (required when type is "upstream")'
                    },
                    // Direct configuration
                    host: {
                      type: 'string',
                      description: 'Target host (required when type is "endpoint")'
                    },
                    port: {
                      type: 'integer',
                      description: 'Target port (required when type is "endpoint")'
                    },
                    protocol: {
                      type: 'string',
                      enum: ['http', 'https'],
                      description: 'Protocol to use (required when type is "endpoint")'
                    },
                    path: {
                      type: 'string',
                      description: 'Base path for the service'
                    },
                    headers: {
                      type: 'object',
                      description: 'Custom headers to add to requests'
                    },
                    credentials: {
                      type: 'object',
                      description: 'Credentials for direct endpoint access'
                    },
                    // Common settings
                    retries: {
                      type: 'integer',
                      description: 'Number of retries for failed requests'
                    }
                  }
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Service created successfully'
            }
          }
        },
        get: {
          summary: 'List Services',
          description: 'List all services for a gateway',
          tags: ['Services'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'offset',
              in: 'query',
              schema: {
                type: 'integer',
                default: 0
              },
              description: 'Pagination offset'
            },
            {
              name: 'limit',
              in: 'query',
              schema: {
                type: 'integer',
                default: 10,
                maximum: 100
              },
              description: 'Number of items per page'
            }
          ],
          responses: {
            '200': {
              description: 'List of services'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/services/{service_id}': {
        get: {
          summary: 'Get Service',
          description: 'Get details of a specific service',
          tags: ['Services'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'service_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the service'
            }
          ],
          responses: {
            '200': {
              description: 'Service details'
            }
          }
        },
        put: {
          summary: 'Update Service',
          description: 'Update an existing service configuration',
          tags: ['Services'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'service_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the service'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the service'
                    },
                    upstream_id: {
                      type: 'string',
                      description: 'ID of the upstream to use'
                    },
                    protocol: {
                      type: 'string',
                      enum: ['http', 'https'],
                      description: 'Protocol to use'
                    },
                    host: {
                      type: 'string',
                      description: 'Host header value'
                    },
                    port: {
                      type: 'integer',
                      description: 'Port number'
                    },
                    path: {
                      type: 'string',
                      description: 'Base path'
                    },
                    retries: {
                      type: 'integer',
                      description: 'Number of retries'
                    },
                    connect_timeout: {
                      type: 'integer',
                      description: 'Connection timeout in milliseconds'
                    },
                    write_timeout: {
                      type: 'integer',
                      description: 'Write timeout in milliseconds'
                    },
                    read_timeout: {
                      type: 'integer',
                      description: 'Read timeout in milliseconds'
                    }
                  }
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'Service updated successfully'
            }
          }
        },
        delete: {
          summary: 'Delete Service',
          description: 'Delete a service',
          tags: ['Services'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'service_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the service'
            }
          ],
          responses: {
            '204': {
              description: 'Service deleted successfully'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/rules': {
        post: {
          summary: 'Create Rule',
          description: 'Create a new rule for a gateway',
          tags: ['Rules'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['path', 'service_id', 'methods'],
                  properties: {
                    path: {
                      type: 'string',
                      description: 'Route path pattern'
                    },
                    service_id: {
                      type: 'string',
                      description: 'ID of the service to route to'
                    },
                    methods: {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']
                      },
                      description: 'HTTP methods to match'
                    },
                    headers: {
                      type: 'object',
                      description: 'Headers to match'
                    },
                    strip_path: {
                      type: 'boolean',
                      description: 'Whether to strip the matched path prefix'
                    },
                    preserve_host: {
                      type: 'boolean',
                      description: 'Whether to preserve the original Host header'
                    },
                    retry_attempts: {
                      type: 'integer',
                      description: 'Number of retry attempts'
                    },
                    plugin_chain: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Plugin name'
                          },
                          stage: {
                            type: 'string',
                            enum: ['pre_request', 'post_request', 'error'],
                            description: 'Plugin execution stage'
                          },
                          priority: {
                            type: 'integer',
                            description: 'Plugin execution priority'
                          },
                          settings: {
                            type: 'object',
                            description: 'Plugin settings'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Rule created successfully'
            }
          }
        },
        get: {
          summary: 'List Rules',
          description: 'List all rules for a gateway',
          tags: ['Rules'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          responses: {
            '200': {
              description: 'List of rules'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/rules/{rule_id}': {
        put: {
          summary: 'Update Rule',
          description: 'Update an existing rule configuration',
          tags: ['Rules'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'rule_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the rule'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    path: {
                      type: 'string',
                      description: 'Route path pattern'
                    },
                    service_id: {
                      type: 'string',
                      description: 'ID of the service to route to'
                    },
                    methods: {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']
                      },
                      description: 'HTTP methods to match'
                    },
                    headers: {
                      type: 'object',
                      description: 'Headers to match'
                    },
                    strip_path: {
                      type: 'boolean',
                      description: 'Whether to strip the matched path prefix'
                    },
                    preserve_host: {
                      type: 'boolean',
                      description: 'Whether to preserve the original Host header'
                    },
                    retry_attempts: {
                      type: 'integer',
                      description: 'Number of retry attempts'
                    },
                    plugin_chain: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Plugin name'
                          },
                          stage: {
                            type: 'string',
                            enum: ['pre_request', 'post_request', 'error'],
                            description: 'Plugin execution stage'
                          },
                          priority: {
                            type: 'integer',
                            description: 'Plugin execution priority'
                          },
                          settings: {
                            type: 'object',
                            description: 'Plugin settings'
                          }
                        }
                      }
                    },
                    active: {
                      type: 'boolean',
                      description: 'Whether the rule is active'
                    }
                  }
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'Rule updated successfully'
            }
          }
        },
        delete: {
          summary: 'Delete Rule',
          description: 'Delete a rule',
          tags: ['Rules'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'rule_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the rule'
            }
          ],
          responses: {
            '204': {
              description: 'Rule deleted successfully'
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/keys': {
        post: {
          summary: 'Create API Key',
          description: 'Create a new API key for a gateway',
          tags: ['API Keys'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name'],
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the API key'
                    },
                    expires_at: {
                      type: 'string',
                      format: 'date-time',
                      description: 'Expiration date and time'
                    }
                  }
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'API key created successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'API key ID'
                      },
                      key: {
                        type: 'string',
                        description: 'The generated API key'
                      },
                      name: {
                        type: 'string',
                        description: 'API key name'
                      },
                      expires_at: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Expiration date and time'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        get: {
          summary: 'List API Keys',
          description: 'List all API keys for a gateway',
          tags: ['API Keys'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            }
          ],
          responses: {
            '200': {
              description: 'List of API keys',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      api_keys: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                              description: 'API key ID'
                            },
                            name: {
                              type: 'string',
                              description: 'API key name'
                            },
                            expires_at: {
                              type: 'string',
                              format: 'date-time',
                              description: 'Expiration date and time'
                            }
                          }
                        }
                      },
                      count: {
                        type: 'integer',
                        description: 'Total number of API keys'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/v1/gateways/{gateway_id}/keys/{key_id}': {
        get: {
          summary: 'Get API Key',
          description: 'Get details of a specific API key',
          tags: ['API Keys'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'key_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the API key'
            }
          ],
          responses: {
            '200': {
              description: 'API key details',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'API key ID'
                      },
                      name: {
                        type: 'string',
                        description: 'API key name'
                      },
                      expires_at: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Expiration date and time'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        delete: {
          summary: 'Delete API Key',
          description: 'Delete an API key',
          tags: ['API Keys'],
          parameters: [
            {
              name: 'gateway_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the gateway'
            },
            {
              name: 'key_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID of the API key'
            }
          ],
          responses: {
            '204': {
              description: 'API key deleted successfully'
            }
          }
        }
      }
    }
  }}
/>




