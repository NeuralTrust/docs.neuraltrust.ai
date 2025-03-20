"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[880],{2229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"trusttest/getting-started/step-by-step/overview","title":"Overview","description":"This guide will walk you through setting up and configuring your first Red Teaming evaluations against your LLM\'s. By following these steps, you\'ll learn how to:","source":"@site/docs/trusttest/getting-started/step-by-step/overview.md","sourceDirName":"trusttest/getting-started/step-by-step","slug":"/trusttest/getting-started/step-by-step/overview","permalink":"/trusttest/getting-started/step-by-step/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trusttest/getting-started/step-by-step/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Overview"},"sidebar":"tutorialSidebar","previous":{"title":"Step-by-Step Guide","permalink":"/trusttest/getting-started/step-by-step"},"next":{"title":"Configure your LLM endpoint","permalink":"/trusttest/getting-started/step-by-step/configure-llm-endpoint"}}');var i=n(4848),r=n(8453);const l={sidebar_position:1,title:"Overview"},o="Getting Started with Red Teaming",a={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Time to Complete",id:"time-to-complete",level:2},{value:"What You&#39;ll Build",id:"what-youll-build",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-red-teaming",children:"Getting Started with Red Teaming"})}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through setting up and configuring your first Red Teaming evaluations against your LLM's. By following these steps, you'll learn how to:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/trusttest/getting-started/step-by-step/configure-llm-endpoint",children:"Configure NeuralTrust to invoke your LLM"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to configure NeuralTrust to invoke your LLM."}),"\n",(0,i.jsx)(t.li,{children:"Configuration options."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/trusttest/getting-started/step-by-step/create-evaluation-set",children:"Create and run a custom evaluation from your RAG"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create and evaluaiton set."}),"\n",(0,i.jsx)(t.li,{children:"Run the EvaluationSet."}),"\n",(0,i.jsx)(t.li,{children:"Look at the results in the UI."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/trusttest/getting-started/step-by-step/run-custom-attack",children:"Create and run a custom attack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create an custom objective attack."}),"\n",(0,i.jsx)(t.li,{children:"Run the attack against your LLM."}),"\n",(0,i.jsx)(t.li,{children:"Look at the results in the UI."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/trusttest/getting-started/step-by-step/run-complience-scan",children:"Scan your LLM for complience vulnerabilities"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Scan your LLM for complience vulnerabilities."}),"\n",(0,i.jsx)(t.li,{children:"Look at the results in the UI."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you begin, make sure you have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A NeuralTrust API key."}),"\n",(0,i.jsx)(t.li,{children:"A LLMs endpoint to invoke through an API Restfull."}),"\n",(0,i.jsxs)(t.li,{children:["NeuralTrust SDK installed. Check the ",(0,i.jsx)(t.a,{href:"/sdks/python-sdk/installation",children:"SDK installation guide"})," for more information."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"time-to-complete",children:"Time to Complete"}),"\n",(0,i.jsx)(t.p,{children:"These guides should take approximately 20 minutes to complete."}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-build",children:"What You'll Build"}),"\n",(0,i.jsx)(t.p,{children:"By the end of these guides, you'll have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A custom EvaluationSet from your RAG."}),"\n",(0,i.jsx)(t.li,{children:"A custom objective attack against your LLM."}),"\n",(0,i.jsx)(t.li,{children:"A complience scan against your LLM."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(t.p,{children:["Ready to begin? Start with ",(0,i.jsx)(t.a,{href:"/trusttest/getting-started/step-by-step/configure-llm-endpoint",children:"Configuring your LLM endpoint"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);