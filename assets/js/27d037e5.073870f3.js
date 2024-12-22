"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[8286],{5994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"ai-gateway/getting-started/quickstart","title":"Quick Start Guide","description":"Get started with AI Gateway in minutes. This guide will help you set up and run your first AI Gateway instance.","source":"@site/docs/ai-gateway/getting-started/quickstart.md","sourceDirName":"ai-gateway/getting-started","slug":"/ai-gateway/getting-started/quickstart","permalink":"/neuraltrust/ai-gateway/getting-started/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/getting-started/quickstart.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Benchmark","permalink":"/neuraltrust/ai-gateway/benchmark"},"next":{"title":"Observability","permalink":"/neuraltrust/category/observability"}}');var a=t(4848),s=t(8453);const r={sidebar_position:1},l="Quick Start Guide",c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"1. Create a Gateway with Advanced Rate Limiting",id:"1-create-a-gateway-with-advanced-rate-limiting",level:3},{value:"2. Create an API Key",id:"2-create-an-api-key",level:3},{value:"3. Create Forwarding Rules with Load Balancing",id:"3-create-forwarding-rules-with-load-balancing",level:3},{value:"Using the Gateway",id:"using-the-gateway",level:2},{value:"Make Requests",id:"make-requests",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Advanced Rate Limiting",id:"advanced-rate-limiting",level:3},{value:"Load Balancing",id:"load-balancing",level:3},{value:"Plugin System",id:"plugin-system",level:3},{value:"Next Steps",id:"next-steps",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"quick-start-guide",children:"Quick Start Guide"})}),"\n",(0,a.jsx)(n.p,{children:"Get started with AI Gateway in minutes. This guide will help you set up and run your first AI Gateway instance."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Go 1.21+"}),"\n",(0,a.jsx)(n.li,{children:"Docker and Docker Compose"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ai-gateway/ai-gateway.git\ncd ai-gateway\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"There is a config.yaml file in the root of the repository. You can modify it to your needs."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'server:\n    admin_port: 8080\n    proxy_port: 8081\n    base_domain: example.com\n\nredis:\n    host: localhost\n    port: 6379\n    password: ""\n    db: 0\n\ndatabase:\n    host: localhost\n    port: 5432\n    user: postgres\n    password: postgres\n    dbname: ai_gateway\n    ssl_mode: disable \n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start Redis:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start the servers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./scripts/run_local.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-gateway-with-advanced-rate-limiting",children:"1. Create a Gateway with Advanced Rate Limiting"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Multi Rate Limited Gateway",\n    "subdomain": "multirate",\n    "tier": "basic",\n    "enabled_plugins": ["advanced_rate_limiter"],\n    "required_plugins": [\n        {\n            "name": "advanced_rate_limiter",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "limits": {\n                    "global": {\n                        "limit": 15,\n                        "window": "1m"\n                    },\n                    "per_ip": {\n                        "limit": 5,\n                        "window": "1m"\n                    },\n                    "per_user": {\n                        "limit": 5,\n                        "window": "1m"\n                    }\n                },\n                "actions": {\n                    "type": "reject",\n                    "retry_after": "60"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"2-create-an-api-key",children:"2. Create an API Key"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/keys \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Test Key"\n}\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"3-create-forwarding-rules-with-load-balancing",children:"3. Create Forwarding Rules with Load Balancing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/rules \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "path": "/api",\n    "targets": [\n      {\n        "url": "https://api1.example.com",\n        "weight": 70\n      },\n      {\n        "url": "https://api2.example.com",\n        "weight": 30\n      }\n    ],\n    "methods": ["GET", "POST"],\n    "strip_path": true\n}\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"using-the-gateway",children:"Using the Gateway"}),"\n",(0,a.jsx)(n.h3,{id:"make-requests",children:"Make Requests"}),"\n",(0,a.jsx)(n.p,{children:"Test different rate limit types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Test IP-based rate limit\ncurl -X GET "http://multirate.example.com:8081/api" \\\n  -H "Authorization: Bearer {api_key}" \\\n  -H "X-Real-IP: 192.168.1.1"\n\n# Test user-based rate limit\ncurl -X GET "http://multirate.example.com:8081/api" \\\n  -H "Authorization: Bearer {api_key}" \\\n  -H "X-User-ID: user123" \\\n  -H "X-Real-IP: 192.168.1.2"\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": You can find a complete test script for this example at ",(0,a.jsx)("a",{class:"link-blue",href:"https://github.com/NeuralTrust/ai-gateway-ce/blob/main/scripts/test_rate_limiter.sh",children:(0,a.jsx)(n.code,{children:"scripts/test_rate_limiter.sh"})}),". This script automates the testing of different rate limit types and provides colored output for better visibility."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,a.jsx)(n.h3,{id:"advanced-rate-limiting",children:"Advanced Rate Limiting"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Global rate limits"}),"\n",(0,a.jsx)(n.li,{children:"Per-IP limits"}),"\n",(0,a.jsx)(n.li,{children:"Per-user limits"}),"\n",(0,a.jsx)(n.li,{children:"Configurable windows and actions"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"load-balancing",children:"Load Balancing"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Weighted distribution"}),"\n",(0,a.jsx)(n.li,{children:"Multiple target support"}),"\n",(0,a.jsx)(n.li,{children:"Automatic failover"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"plugin-system",children:"Plugin System"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pre and post request processing"}),"\n",(0,a.jsx)(n.li,{children:"Sequential and parallel execution"}),"\n",(0,a.jsx)(n.li,{children:"Built-in plugins for common tasks"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/ai-gateway/concepts/forwarding-rules",children:"Forwarding Rules"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/ai-gateway/concepts/plugin-system",children:"Plugin System Documentation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/ai-gateway/concepts/traffic-management",children:"Traffic Management Guide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/ai-gateway/concepts/consumer-groups",children:"Consumer Groups (Enterprise)"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);