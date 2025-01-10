"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[7998],{2183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ai-gateway/getting-started/step-by-step/create-rules","title":"Create Rules","description":"This guide will walk you through creating rules in AI Gateway. Rules determine how incoming requests are matched and routed to your services.","source":"@site/docs/ai-gateway/getting-started/step-by-step/create-rules.md","sourceDirName":"ai-gateway/getting-started/step-by-step","slug":"/ai-gateway/getting-started/step-by-step/create-rules","permalink":"/neuraltrust/ai-gateway/getting-started/step-by-step/create-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/getting-started/step-by-step/create-rules.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Create Rules"},"sidebar":"tutorialSidebar","previous":{"title":"Configure a Service","permalink":"/neuraltrust/ai-gateway/getting-started/step-by-step/add-service"},"next":{"title":"Load Balancing","permalink":"/neuraltrust/ai-gateway/getting-started/step-by-step/load-balancing"}}');var r=n(4848),i=n(8453);const a={sidebar_position:7,title:"Create Rules"},l="Create Rules",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Plan Your Rules",id:"step-1-plan-your-rules",level:2},{value:"Step 2: Create a Rule",id:"step-2-create-a-rule",level:2},{value:"Step 3: Add Path Matching",id:"step-3-add-path-matching",level:2},{value:"Step 4: Configure Headers",id:"step-4-configure-headers",level:2},{value:"Step 5: Verify Rules",id:"step-5-verify-rules",level:2},{value:"Step 6: Test the Rules",id:"step-6-test-the-rules",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"create-rules",children:"Create Rules"})}),"\n",(0,r.jsx)(t.p,{children:"This guide will walk you through creating rules in AI Gateway. Rules determine how incoming requests are matched and routed to your services."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before you begin, make sure you have:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"AI Gateway installed and running"}),"\n",(0,r.jsxs)(t.li,{children:["A service configured (see ",(0,r.jsx)(t.a,{href:"/neuraltrust/ai-gateway/getting-started/step-by-step/add-service",children:"Add a Service"}),")"]}),"\n",(0,r.jsx)(t.li,{children:"Access to the Admin API"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-1-plan-your-rules",children:"Step 1: Plan Your Rules"}),"\n",(0,r.jsx)(t.p,{children:"Decide on your rule configuration:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Choose the paths to match"}),"\n",(0,r.jsx)(t.li,{children:"Determine allowed HTTP methods"}),"\n",(0,r.jsx)(t.li,{children:"Plan path handling (strip path, preserve host)"}),"\n",(0,r.jsx)(t.li,{children:"Identify target service"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-create-a-rule",children:"Step 2: Create a Rule"}),"\n",(0,r.jsx)(t.p,{children:"Create your first rule using the Admin API:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "service_id": "{service-id}",\n    "path": "/v1/chat/completions",\n    "methods": ["POST"],\n    "strip_path": false,\n    "preserve_host": false\n  }\'\n'})}),"\n",(0,r.jsx)(t.h2,{id:"step-3-add-path-matching",children:"Step 3: Add Path Matching"}),"\n",(0,r.jsx)(t.p,{children:"Create rules with different path matching patterns:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Prefix matching\ncurl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "service_id": "{service-id}",\n    "path": "/api/v1/*",\n    "methods": ["GET", "POST"],\n    "strip_path": true\n  }\'\n\n# Exact matching\ncurl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "service_id": "{service-id}",\n    "path": "=/v1/models",\n    "methods": ["GET"]\n  }\'\n'})}),"\n",(0,r.jsx)(t.h2,{id:"step-4-configure-headers",children:"Step 4: Configure Headers"}),"\n",(0,r.jsx)(t.p,{children:"Add header matching if needed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "service_id": "{service-id}",\n    "path": "/v1/embeddings",\n    "methods": ["POST"],\n    "headers": {\n      "content-type": ["application/json"]\n    }\n  }\'\n'})}),"\n",(0,r.jsx)(t.h2,{id:"step-5-verify-rules",children:"Step 5: Verify Rules"}),"\n",(0,r.jsx)(t.p,{children:"Check that your rules are properly configured:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl http://localhost:8080/api/v1/gateways/{gateway-id}/rules\n"})}),"\n",(0,r.jsx)(t.h2,{id:"step-6-test-the-rules",children:"Step 6: Test the Rules"}),"\n",(0,r.jsx)(t.p,{children:"Test your rule configurations:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Test a route\ncurl -X POST http://your-gateway-domain/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: your-key" \\\n  -d \'{\n    "model": "gpt-3.5-turbo",\n    "messages": [{"role": "user", "content": "Hello"}]\n  }\'\n'})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(t.p,{children:"Now that you have configured your rules, read more about:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Learn about ",(0,r.jsx)(t.a,{href:"/neuraltrust/ai-gateway/getting-started/step-by-step/load-balancing",children:"Load Balancing"})]}),"\n",(0,r.jsxs)(t.li,{children:["Explore ",(0,r.jsx)(t.a,{href:"/neuraltrust/ai-gateway/getting-started/step-by-step/rate-limiting",children:"Rate Limiting"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.p,{children:"Common issues and solutions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Routing Issues"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Verify path patterns"}),"\n",(0,r.jsx)(t.li,{children:"Check method restrictions"}),"\n",(0,r.jsx)(t.li,{children:"Review rule priorities"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Path Handling"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Check strip_path setting"}),"\n",(0,r.jsx)(t.li,{children:"Verify preserve_host"}),"\n",(0,r.jsx)(t.li,{children:"Test path transformations"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Header Problems"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Verify header requirements"}),"\n",(0,r.jsx)(t.li,{children:"Check header values"}),"\n",(0,r.jsx)(t.li,{children:"Test header matching"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);