"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[1810],{3606:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"trustgate/concepts/services","title":"Services","description":"In AI Gateway, a service is an entity representing an external upstream API or AI model endpoint. For example, an OpenAI API endpoint, an Anthropic Claude service, or your own custom AI model service.","source":"@site/docs/trustgate/concepts/services.md","sourceDirName":"trustgate/concepts","slug":"/trustgate/concepts/services","permalink":"/trustgate/concepts/services","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trustgate/concepts/services.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Services"},"sidebar":"tutorialSidebar","previous":{"title":"Gateway","permalink":"/trustgate/concepts/gateway"},"next":{"title":"Upstreams","permalink":"/trustgate/concepts/upstreams"}}');var t=s(4848),r=s(8453);const c={sidebar_position:2,title:"Services"},a="Services",l={},o=[{value:"Service and Rules Interaction",id:"service-and-rules-interaction",level:2},{value:"Service Types",id:"service-types",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"services",children:"Services"})}),"\n",(0,t.jsx)(n.p,{children:"In AI Gateway, a service is an entity representing an external upstream API or AI model endpoint. For example, an OpenAI API endpoint, an Anthropic Claude service, or your own custom AI model service."}),"\n",(0,t.jsx)(n.p,{children:"The main attribute of a service is its upstream configuration, which defines where and how the AI Gateway should forward requests."}),"\n",(0,t.jsx)(n.h2,{id:"service-and-rules-interaction",children:"Service and Rules Interaction"}),"\n",(0,t.jsx)(n.p,{children:"Services, in conjunction with rules, let you expose your AI models and services to clients with AI Gateway. The gateway abstracts the service from the clients by using rules. Since the client always calls the rule, changes to the services (like switching AI model providers or versions) don't impact how clients make the call. Rules also allow the same service to be used by multiple clients and apply different policies based on the rule used."}),"\n",(0,t.jsx)(n.h2,{id:"service-types",children:"Service Types"}),"\n",(0,t.jsx)(n.p,{children:"AI Gateway supports different types of services that help you integrate and manage various AI model endpoints. The two main service types are:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Upstream Services"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These services provide direct connections to your backend AI models and infrastructure. They offer robust features including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct connection to backend AI models, allowing you to integrate your own hosted models and AI services"}),"\n",(0,t.jsx)(n.li,{children:"Load balanced distribution across multiple target endpoints to optimize performance and resource utilization"}),"\n",(0,t.jsx)(n.li,{children:"Built-in health checking capabilities to monitor service availability and performance"}),"\n",(0,t.jsx)(n.li,{children:"Automatic failover support to maintain high availability when issues occur"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Proxy Services"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These services act as intermediaries to external AI providers, adding important management capabilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Seamless proxy requests to external AI providers like OpenAI, Anthropic, and others"}),"\n",(0,t.jsx)(n.li,{children:"Comprehensive authentication and rate limiting to control access and usage"}),"\n",(0,t.jsx)(n.li,{children:"Powerful request and response transformation capabilities to modify payloads as needed"}),"\n",(0,t.jsx)(n.li,{children:"Intelligent response caching when possible to improve performance and reduce costs"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Service Design"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Choose appropriate service types"}),"\n",(0,t.jsx)(n.li,{children:"Plan service boundaries"}),"\n",(0,t.jsx)(n.li,{children:"Consider service dependencies"}),"\n",(0,t.jsx)(n.li,{children:"Design for resilience"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Service Organization"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Group related services"}),"\n",(0,t.jsx)(n.li,{children:"Use clear naming conventions"}),"\n",(0,t.jsx)(n.li,{children:"Document service relationships"}),"\n",(0,t.jsx)(n.li,{children:"Maintain service hierarchy"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Security"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configure appropriate timeouts"}),"\n",(0,t.jsx)(n.li,{children:"Set up retry policies"}),"\n",(0,t.jsx)(n.li,{children:"Enable health checks"}),"\n",(0,t.jsx)(n.li,{children:"Implement rate limiting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/trustgate/concepts/upstreams",children:"Learn about Upstreams"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/trustgate/concepts/rules",children:"Configure Rules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/trustgate/concepts/traffic-management",children:"Understand Traffic Management"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);