"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[7146],{3423:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ai-gateway/concepts/forwarding-rules","title":"Forwarding Rules","description":"Forwarding rules are a core feature of the AI Gateway that define how incoming requests are routed to various AI providers.","source":"@site/docs/ai-gateway/concepts/forwarding-rules.md","sourceDirName":"ai-gateway/concepts","slug":"/ai-gateway/concepts/forwarding-rules","permalink":"/neuraltrust/ai-gateway/concepts/forwarding-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/concepts/forwarding-rules.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Consumer Groups (Enterprise Edition)","permalink":"/neuraltrust/ai-gateway/concepts/consumer-groups"},"next":{"title":"Plugin System","permalink":"/neuraltrust/ai-gateway/concepts/plugin-system"}}');var t=r(4848),s=r(8453);const a={sidebar_position:1},l="Forwarding Rules",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Rule Structure",id:"rule-structure",level:2},{value:"Automatic Rule Generation",id:"automatic-rule-generation",level:2},{value:"OpenAI Provider",id:"openai-provider",level:3},{value:"Anthropic Provider",id:"anthropic-provider",level:3},{value:"Custom Rules",id:"custom-rules",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Path Matching",id:"path-matching",level:3},{value:"Target Configuration",id:"target-configuration",level:3},{value:"HTTP Methods",id:"http-methods",level:3},{value:"Header Management",id:"header-management",level:3},{value:"Retry Policy",id:"retry-policy",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"forwarding-rules",children:"Forwarding Rules"})}),"\n",(0,t.jsx)(n.p,{children:"Forwarding rules are a core feature of the AI Gateway that define how incoming requests are routed to various AI providers."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Each forwarding rule specifies:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Path matching patterns"}),"\n",(0,t.jsx)(n.li,{children:"Target endpoints"}),"\n",(0,t.jsx)(n.li,{children:"HTTP methods"}),"\n",(0,t.jsx)(n.li,{children:"Header configurations"}),"\n",(0,t.jsx)(n.li,{children:"Plugin chains"}),"\n",(0,t.jsx)(n.li,{children:"Load balancing settings"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rule-structure",children:"Rule Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "uuid",\n  "gateway_id": "gateway-uuid",\n  "path": "/v1/chat/completions",\n  "targets": [\n    {"url": "https://api.openai.com"}\n  ],\n  "methods": ["POST"],\n  "headers": {},\n  "strip_path": false,\n  "preserve_host": false,\n  "retry_attempts": 0,\n  "plugin_chain": [],\n  "active": true,\n  "public": false\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"automatic-rule-generation",children:"Automatic Rule Generation"}),"\n",(0,t.jsx)(n.p,{children:'For gateways of type "models", the system automatically generates appropriate forwarding rules based on the configured provider:'}),"\n",(0,t.jsx)(n.h3,{id:"openai-provider",children:"OpenAI Provider"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "path": "/v1/chat/completions",\n  "targets": [{"url": "https://api.openai.com"}],\n  "methods": ["POST"]\n},\n{\n  "path": "/v1/completions",\n  "targets": [{"url": "https://api.openai.com"}],\n  "methods": ["POST"]\n},\n{\n  "path": "/v1/embeddings",\n  "targets": [{"url": "https://api.openai.com"}],\n  "methods": ["POST"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"anthropic-provider",children:"Anthropic Provider"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "path": "/v1/complete",\n  "targets": [{"url": "https://api.anthropic.com"}],\n  "methods": ["POST"]\n},\n{\n  "path": "/v1/messages",\n  "targets": [{"url": "https://api.anthropic.com"}],\n  "methods": ["POST"]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"custom-rules",children:"Custom Rules"}),"\n",(0,t.jsx)(n.p,{children:"Create custom rules for specialized routing needs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/rules \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "path": "/custom/endpoint",\n    "targets": [\n      {\n        "url": "https://primary-api.example.com",\n        "weight": 80\n      },\n      {\n        "url": "https://backup-api.example.com",\n        "weight": 20\n      }\n    ],\n    "methods": ["GET", "POST"],\n    "headers": {\n      "X-Custom-Header": "value"\n    },\n    "strip_path": true,\n    "retry_attempts": 3,\n    "plugin_chain": [\n      {\n        "name": "rate_limiter",\n        "enabled": true,\n        "priority": 1,\n        "settings": {\n          "limit": 100,\n          "window": "1m"\n        }\n      }\n    ]\n  }\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,t.jsx)(n.h3,{id:"path-matching",children:"Path Matching"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Exact matches: ",(0,t.jsx)(n.code,{children:"/v1/chat/completions"})]}),"\n",(0,t.jsxs)(n.li,{children:["Wildcards: ",(0,t.jsx)(n.code,{children:"/api/*"})]}),"\n",(0,t.jsxs)(n.li,{children:["Parameters: ",(0,t.jsx)(n.code,{children:"/users/:id"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"target-configuration",children:"Target Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Single endpoint"}),"\n",(0,t.jsx)(n.li,{children:"Multiple endpoints with weights"}),"\n",(0,t.jsx)(n.li,{children:"Load balancing options"}),"\n",(0,t.jsx)(n.li,{children:"Health checks"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"http-methods",children:"HTTP Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supported: GET, POST, PUT, DELETE, PATCH"}),"\n",(0,t.jsx)(n.li,{children:"Method-specific configurations"}),"\n",(0,t.jsx)(n.li,{children:"Method restrictions"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"header-management",children:"Header Management"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Required headers"}),"\n",(0,t.jsx)(n.li,{children:"Header transformations"}),"\n",(0,t.jsx)(n.li,{children:"Header preservation"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"retry-policy",children:"Retry Policy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "retry_attempts": 3,\n  "retry_interval": "1s",\n  "retry_on": [500, 502, 503, 504]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Path Design"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use clear, hierarchical paths"}),"\n",(0,t.jsx)(n.li,{children:"Consider versioning"}),"\n",(0,t.jsx)(n.li,{children:"Plan for future endpoints"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Security"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Limit exposed methods"}),"\n",(0,t.jsx)(n.li,{children:"Configure appropriate headers"}),"\n",(0,t.jsx)(n.li,{children:"Use HTTPS for targets"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Performance"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enable path stripping when needed"}),"\n",(0,t.jsx)(n.li,{children:"Configure proper retry policies"}),"\n",(0,t.jsx)(n.li,{children:"Use load balancing for high availability"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Track rule usage"}),"\n",(0,t.jsx)(n.li,{children:"Monitor target health"}),"\n",(0,t.jsx)(n.li,{children:"Set up alerts for failures"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);