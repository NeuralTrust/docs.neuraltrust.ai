"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[416],{2953:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"AI Gateway/Development/parallel-plugin-execution","title":"Parallel Plugin Execution","description":"The plugin system supports both sequential and parallel execution of plugins. This is controlled through two mechanisms:","source":"@site/docs/AI Gateway/Development/parallel-plugin-execution.md","sourceDirName":"AI Gateway/Development","slug":"/AI Gateway/Development/parallel-plugin-execution","permalink":"/neuraltrust/AI Gateway/Development/parallel-plugin-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/AI%20Gateway/Development/parallel-plugin-execution.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Plugin System","permalink":"/neuraltrust/AI Gateway/Development/plugin-system"},"next":{"title":"Traffic Management","permalink":"/neuraltrust/AI Gateway/Development/traffic-management"}}');var r=l(4848),t=l(8453);const a={sidebar_position:4},s="Parallel Plugin Execution",o={},u=[{value:"Example Configuration",id:"example-configuration",level:2},{value:"Execution Flow:",id:"execution-flow",level:2},{value:"Plugin Types:",id:"plugin-types",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"parallel-plugin-execution",children:"Parallel Plugin Execution"})}),"\n",(0,r.jsx)(n.p,{children:"The plugin system supports both sequential and parallel execution of plugins. This is controlled through two mechanisms:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Priority Levels"}),": Plugins are executed in order of their priority (lower numbers run first)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parallel Flag"}),": Plugins with the same priority can run in parallel if configured to do so."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'"plugin_chain": [\n    {\n        "name": "rate_limiter",\n        "enabled": true,\n        "parallel": false,  // Must run sequentially\n        "priority": 1      // Runs first\n    },\n    {\n        "name": "external_validator",\n        "enabled": true,\n        "parallel": true,   // Can run in parallel\n        "priority": 2      // Runs after rate_limiter\n    },\n    {\n        "name": "content_validator",\n        "enabled": true,\n        "parallel": true,   // Can run in parallel\n        "priority": 2      // Runs alongside external_validator\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"execution-flow",children:"Execution Flow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Plugins are grouped by priority"}),"\n",(0,r.jsx)(n.li,{children:"Each priority group is executed in order (lowest to highest)"}),"\n",(0,r.jsxs)(n.li,{children:["Within each priority group:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If there's only one plugin, it runs sequentially"}),"\n",(0,r.jsx)(n.li,{children:"If there are multiple plugins and they support parallel execution, they run concurrently"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"plugin-types",children:"Plugin Types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Sequential Plugins"})," (parallel: false):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Need to maintain state"}),"\n",(0,r.jsx)(n.li,{children:"Order-dependent operations"}),"\n",(0,r.jsx)(n.li,{children:"Example: Rate Limiter"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Parallel Plugins"})," (parallel: true):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Stateless operations"}),"\n",(0,r.jsx)(n.li,{children:"Order-independent"}),"\n",(0,r.jsx)(n.li,{children:"Example: External Validators"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This design allows for optimal performance by running independent operations concurrently while maintaining necessary ordering constraints."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>s});var i=l(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);