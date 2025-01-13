"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[8729],{2663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"red-teaming/getting-started/step-by-step/run-complience-scan","title":"Run a Compliance Scan","description":"This guide demonstrates how to use the NeuralTrust API to run compliance scans that analyze your AI system for potential vulnerabilities.","source":"@site/docs/red-teaming/getting-started/step-by-step/run-complience-scan.md","sourceDirName":"red-teaming/getting-started/step-by-step","slug":"/red-teaming/getting-started/step-by-step/run-complience-scan","permalink":"/red-teaming/getting-started/step-by-step/run-complience-scan","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/red-teaming/getting-started/step-by-step/run-complience-scan.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Run a Custom Objective Attack","permalink":"/red-teaming/getting-started/step-by-step/run-custom-attack"},"next":{"title":"Key Concepts","permalink":"/category/key-concepts-1"}}');var s=t(4848),i=t(8453);const r={sidebar_position:5},c="Run a Compliance Scan",o={},l=[{value:"Setup",id:"setup",level:2},{value:"Running a Compliance Scan",id:"running-a-compliance-scan",level:2},{value:"Complete Script",id:"complete-script",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"run-a-compliance-scan",children:"Run a Compliance Scan"})}),"\n",(0,s.jsx)(n.p,{children:"This guide demonstrates how to use the NeuralTrust API to run compliance scans that analyze your AI system for potential vulnerabilities."}),"\n",(0,s.jsx)(n.p,{children:"By default, the scan will run a comprehensive set of security checks across multiple categories to evaluate your model's safety and compliance."}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"First, import and initialize the NeuralTrust API client:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from neuraltrust import NeuralTrustApi\n\nclient = NeuralTrustApi()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-a-compliance-scan",children:"Running a Compliance Scan"}),"\n",(0,s.jsx)(n.p,{children:"The scanning feature allows you to evaluate your AI model against various security categories. Each scan can be configured with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": A descriptive name for your scan"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"categories"}),": List of specific security categories to test. For the complete list of categories, please refer to the ",(0,s.jsx)(n.a,{href:"/red-teaming/key-concepts/scanner#available-categories",children:"Compliance Scan Categories"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_objectives_per_category"}),": Number of test objectives per category"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dynamic_attack_config"}),": Additional configuration for attack simulations"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, we want to run a comprehensive security scan across multiple categories:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'response = client.scanner.scan(\n    name="Comprehensive Security Scan",\n    categories=["off_tone", "data_leak"],\n    max_objectives_per_category=10,\n    dynamic_attack_config={"max_turns": 10},\n)\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The default scan will run checks across all available security categories with 5 objectives per category if no parameters are specified."})}),"\n",(0,s.jsx)(n.h2,{id:"complete-script",children:"Complete Script"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from neuraltrust import NeuralTrustApi\n\nclient = NeuralTrustApi()\n\n# Run a comprehensive security scan\nresponse = client.scanner.scan(\n    name="Comprehensive Security Scan",\n    categories=["off_tone", "data_leak"],\n    max_objectives_per_category=10,\n    dynamic_attack_config={"max_turns": 10},\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, you can see the results in the UI."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);