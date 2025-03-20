"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[9770],{9177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"trustgate/guides/token-rate-limiting","title":"Open AI Token-Based Rate Limiting","description":"This guide demonstrates how to implement token-based rate limiting in TrustGate to effectively manage AI model usage and costs. Unlike traditional request-based rate limiting, token-based rate limiting considers the actual token consumption of each request, providing more granular control over API usage.","source":"@site/docs/trustgate/guides/token-rate-limiting.md","sourceDirName":"trustgate/guides","slug":"/trustgate/guides/token-rate-limiting","permalink":"/trustgate/guides/token-rate-limiting","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trustgate/guides/token-rate-limiting.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Guides","permalink":"/trustgate/guides"},"next":{"title":"Balancing AI Providers","permalink":"/trustgate/guides/provider-load-balancing"}}');var s=t(4848),r=t(8453);const a={sidebar_position:3},l="Open AI Token-Based Rate Limiting",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Create a Gateway with Token Rate Limiter",id:"step-1-create-a-gateway-with-token-rate-limiter",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Step 2: Configure an Upstream",id:"step-2-configure-an-upstream",level:2},{value:"Step 3: Create a Service",id:"step-3-create-a-service",level:2},{value:"Step 4: Add a Rule",id:"step-4-add-a-rule",level:2},{value:"Step 5: Generate an API Key",id:"step-5-generate-an-api-key",level:2},{value:"Using the Rate-Limited API",id:"using-the-rate-limited-api",level:2},{value:"Response Headers",id:"response-headers",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"open-ai-token-based-rate-limiting",children:"Open AI Token-Based Rate Limiting"})}),"\n",(0,s.jsx)(n.p,{children:"This guide demonstrates how to implement token-based rate limiting in TrustGate to effectively manage AI model usage and costs. Unlike traditional request-based rate limiting, token-based rate limiting considers the actual token consumption of each request, providing more granular control over API usage."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TrustGate installed and running"}),"\n",(0,s.jsx)(n.li,{children:"Access to an AI provider (e.g., OpenAI) API key"}),"\n",(0,s.jsx)(n.li,{children:"Basic understanding of rate limiting concepts"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-create-a-gateway-with-token-rate-limiter",children:"Step 1: Create a Gateway with Token Rate Limiter"}),"\n",(0,s.jsx)(n.p,{children:"First, create a gateway with the token rate limiter plugin enabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "OpenAI Token Rate Limiter",\n    "subdomain": "your-subdomain",\n    "required_plugins": [\n      {\n        "name": "token_rate_limiter",\n        "enabled": true,\n        "settings": {\n          "tokens_per_request": 20,     # Maximum tokens per single request\n          "tokens_per_minute": 100,     # Token budget per minute\n          "bucket_size": 1000,          # Maximum token bucket capacity\n          "requests_per_minute": 60     # Maximum requests per minute\n        }\n      }\n    ]\n  }\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tokens_per_request"}),": Maximum number of tokens allowed in a single request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tokens_per_minute"}),": Total token budget allocated per minute"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bucket_size"}),": Maximum capacity of the token bucket"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"requests_per_minute"}),": Maximum number of requests allowed per minute"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-configure-an-upstream",children:"Step 2: Configure an Upstream"}),"\n",(0,s.jsx)(n.p,{children:"Set up an upstream that connects to your AI provider:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/upstreams" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "ai-upstream",\n    "algorithm": "round-robin",\n    "targets": [{\n      "path": "/v1/chat/completions",\n      "provider": "openai",\n      "weight": 100,\n      "models": ["gpt-3.5-turbo", "gpt-4"],\n      "default_model": "gpt-3.5-turbo",\n      "credentials": {\n        "header_name": "Authorization",\n        "header_value": "Bearer your-api-key"\n      }\n    }]\n  }\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-create-a-service",children:"Step 3: Create a Service"}),"\n",(0,s.jsx)(n.p,{children:"Create a service that uses the upstream:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/services" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "ai-service",\n    "type": "upstream",\n    "description": "AI API Service",\n    "upstream_id": "{upstream_id}",\n    "retries": 3\n  }\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-4-add-a-rule",children:"Step 4: Add a Rule"}),"\n",(0,s.jsx)(n.p,{children:"Configure a rule to route requests to your service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/rules" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "path": "/v1",\n    "service_id": "{service_id}",\n    "methods": ["POST"],\n    "strip_path": false,\n    "active": true\n  }\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-5-generate-an-api-key",children:"Step 5: Generate an API Key"}),"\n",(0,s.jsx)(n.p,{children:"Create an API key for authentication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/keys" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "test-key",\n    "expires_at": "2024-12-31T23:59:59Z"\n  }\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"using-the-rate-limited-api",children:"Using the Rate-Limited API"}),"\n",(0,s.jsx)(n.p,{children:"When making requests to your rate-limited API, you'll receive headers indicating your current rate limit status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/v1/chat/completions" \\\n  -H "Content-Type: application/json" \\\n  -H "Host: your-subdomain.example.com" \\\n  -H "X-Api-Key: your-api-key" \\\n  -d \'{\n    "model": "gpt-3.5-turbo",\n    "messages": [\n      {\n        "role": "user",\n        "content": "Hello, how are you?"\n      }\n    ]\n  }\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"response-headers",children:"Response Headers"}),"\n",(0,s.jsx)(n.p,{children:"The API returns several headers to help you track your rate limit status:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-RateLimit-Limit-Tokens"}),": Total token budget per minute"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-RateLimit-Remaining-Tokens"}),": Remaining tokens in the current window"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-RateLimit-Reset-Tokens"}),": Time until token budget resets (in seconds)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-RateLimit-Limit-Requests"}),": Maximum requests per minute"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-RateLimit-Remaining-Requests"}),": Remaining requests in the current window"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-RateLimit-Reset-Requests"}),": Time until request count resets (in seconds)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X-Tokens-Consumed"}),": Number of tokens consumed by the current request"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Set Appropriate Limits"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Consider your AI model's pricing"}),"\n",(0,s.jsx)(n.li,{children:"Account for both input and output tokens"}),"\n",(0,s.jsx)(n.li,{children:"Leave headroom for burst traffic"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Monitor Usage"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Track token consumption patterns"}),"\n",(0,s.jsx)(n.li,{children:"Watch for rate limit errors"}),"\n",(0,s.jsx)(n.li,{children:"Adjust limits based on actual usage"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Handle Rate Limit Errors"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement exponential backoff"}),"\n",(0,s.jsx)(n.li,{children:"Queue requests when approaching limits"}),"\n",(0,s.jsx)(n.li,{children:"Provide clear feedback to users"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optimize Token Usage"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Compress prompts where possible"}),"\n",(0,s.jsx)(n.li,{children:"Use efficient model configurations"}),"\n",(0,s.jsx)(n.li,{children:"Implement client-side token estimation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter rate limit errors, check:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Current rate limit status using response headers"}),"\n",(0,s.jsx)(n.li,{children:"Token consumption patterns in your requests"}),"\n",(0,s.jsx)(n.li,{children:"Plugin configuration in the gateway"}),"\n",(0,s.jsx)(n.li,{children:"Time until rate limits reset"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement monitoring for rate limit metrics"}),"\n",(0,s.jsx)(n.li,{children:"Set up alerts for high token usage"}),"\n",(0,s.jsx)(n.li,{children:"Configure multiple rate limit tiers"}),"\n",(0,s.jsx)(n.li,{children:"Add fallback providers for high availability"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);