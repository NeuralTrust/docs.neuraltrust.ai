"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[134],{2284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"ai-gateway/getting-started/step-by-step/first-gateway","title":"Create Your First Gateway","description":"After installing AI Gateway, the next step is to create your first gateway instance. This guide will walk you through creating and configuring a basic gateway.","source":"@site/docs/ai-gateway/getting-started/step-by-step/first-gateway.md","sourceDirName":"ai-gateway/getting-started/step-by-step","slug":"/ai-gateway/getting-started/step-by-step/first-gateway","permalink":"/ai-gateway/getting-started/step-by-step/first-gateway","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/getting-started/step-by-step/first-gateway.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Create Your First Gateway"},"sidebar":"tutorialSidebar","previous":{"title":"Get AI Gateway","permalink":"/ai-gateway/getting-started/step-by-step/get-ai-gateway"},"next":{"title":"Configure an Upstream","permalink":"/ai-gateway/getting-started/step-by-step/configure-upstream"}}');var a=t(4848),s=t(8453);const r={sidebar_position:4,title:"Create Your First Gateway"},l="Create Your First Gateway",c={},o=[{value:"Gateway Overview",id:"gateway-overview",level:2},{value:"Create a Gateway",id:"create-a-gateway",level:2},{value:"Verify Gateway Creation",id:"verify-gateway-creation",level:3},{value:"Gateway Configuration",id:"gateway-configuration",level:2},{value:"Basic Settings",id:"basic-settings",level:3},{value:"Test Your Gateway",id:"test-your-gateway",level:2},{value:"Create an API Key",id:"create-an-api-key",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"create-your-first-gateway",children:"Create Your First Gateway"})}),"\n",(0,a.jsx)(n.p,{children:"After installing AI Gateway, the next step is to create your first gateway instance. This guide will walk you through creating and configuring a basic gateway."}),"\n",(0,a.jsx)(n.h2,{id:"gateway-overview",children:"Gateway Overview"}),"\n",(0,a.jsx)(n.p,{children:"A gateway is the core entity in AI Gateway that:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Handles incoming requests"}),"\n",(0,a.jsx)(n.li,{children:"Manages plugins"}),"\n",(0,a.jsx)(n.li,{children:"Controls routing"}),"\n",(0,a.jsx)(n.li,{children:"Provides monitoring"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-gateway",children:"Create a Gateway"}),"\n",(0,a.jsx)(n.p,{children:"Use the Admin API to create your first gateway:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Create a gateway\ncurl -X POST http://localhost:8080/api/v1/gateways \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "my-first-gateway",\n    "subdomain": "api",\n    "required_plugins": [\n        {\n            "name": "rate_limiter",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "limits": {\n                    "global": {\n                        "limit": 15,\n                        "window": "1m"\n                    },\n                    "per_ip": {\n                        "limit": 5,\n                        "window": "1m"\n                    },\n                    "per_user": {\n                        "limit": 5,\n                        "window": "1m"\n                    }\n                },\n                "actions": {\n                    "type": "reject",\n                    "retry_after": "60"\n                }\n            }\n        }\n    ]\n  }\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"verify-gateway-creation",children:"Verify Gateway Creation"}),"\n",(0,a.jsx)(n.p,{children:"Check if your gateway was created successfully:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Get gateway details\ncurl http://localhost:8080/api/v1/gateways/{gateway-id}\n\n# List all gateways\ncurl http://localhost:8080/api/v1/gateways\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gateway-configuration",children:"Gateway Configuration"}),"\n",(0,a.jsx)(n.h3,{id:"basic-settings",children:"Basic Settings"}),"\n",(0,a.jsx)(n.p,{children:"Key configuration options:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Name and Subdomain"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "name": "my-first-gateway",\n  "subdomain": "api"\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Required Plugins"}),"\nThe ",(0,a.jsx)(n.code,{children:"required_plugins"})," array defines plugins that are automatically executed for all requests passing through the gateway. These plugins are essential for implementing gateway-wide policies and controls."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Key Aspects of Required Plugins:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Global Execution"}),": Required plugins run for every request, regardless of the route or service"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Execution Order"}),": Plugins are executed in order of their priority (lower numbers execute first)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example Configuration:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "required_plugins": [\n    {\n       "name": "rate_limiter",\n       "enabled": true,\n       "stage": "pre_request",  // Executes before request processing\n       "priority": 1,           // Lower number = higher priority\n       "settings": {\n           "limits": {\n               "global": {\n                   "limit": 15,    // Maximum requests\n                   "window": "1m"  // Time window (1 minute)\n               },\n               "per_ip": {         // IP-based limiting\n                   "limit": 5,\n                   "window": "1m"\n               },\n               "per_user": {       // User-based limiting\n                   "limit": 5,\n                   "window": "1m"\n               }\n           },\n           "actions": {\n               "type": "reject",        // Action when limit exceeded\n               "retry_after": "60"      // Retry delay in seconds\n           }\n       }\n     }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Common Use Cases:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Rate Limiting: Control request volumes"}),"\n",(0,a.jsx)(n.li,{children:"Authentication: Verify request credentials"}),"\n",(0,a.jsx)(n.li,{children:"Logging: Track all gateway traffic"}),"\n",(0,a.jsx)(n.li,{children:"Monitoring: Collect metrics for all requests"}),"\n",(0,a.jsx)(n.li,{children:"Security: Apply security policies uniformly"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"test-your-gateway",children:"Test Your Gateway"}),"\n",(0,a.jsx)(n.h3,{id:"create-an-api-key",children:"Create an API Key"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Create a test API key\ncurl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/keys \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "test-key",\n    "expires_at": "2027-12-31T23:59:59Z"\n  }\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Naming Conventions"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use descriptive gateway names"}),"\n",(0,a.jsx)(n.li,{children:"Keep subdomains simple"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Plugin Configuration"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Start with essential plugins"}),"\n",(0,a.jsx)(n.li,{children:"Configure reasonable limits"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Security"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Enable authentication"}),"\n",(0,a.jsx)(n.li,{children:"Set up rate limiting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsx)(n.p,{children:"Now that your gateway is running, you can:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/ai-gateway/getting-started/step-by-step/configure-upstream",children:"Configure an Upstream"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../concepts/gateway.md",children:"Gateway Concepts"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../concepts/plugins.md",children:"Plugin System"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/ai-gateway/getting-started/step-by-step/rate-limiting",children:"Rate Limiting"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);