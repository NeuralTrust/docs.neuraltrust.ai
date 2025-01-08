"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[5499],{8687:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"red-teaming/overview","title":"What\'s Red Teaming for LLMs?","description":"Red teaming is a critical practice for evaluating Large Language Models (LLMs) by systematically challenging their behaviors, safety measures, and potential vulnerabilities. While traditionally associated with security testing, LLM red teaming encompasses both security assessment and functional evaluation of model capabilities.","source":"@site/docs/red-teaming/overview.md","sourceDirName":"red-teaming","slug":"/red-teaming/overview","permalink":"/neuraltrust/red-teaming/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/red-teaming/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Red Teaming","permalink":"/neuraltrust/category/red-teaming"},"next":{"title":"Evaluation Sets","permalink":"/neuraltrust/red-teaming/evaluation-sets"}}');var t=i(4848),a=i(8453);const r={sidebar_position:1},l="What's Red Teaming for LLMs?",o={},c=[{value:"Why Red Team LLMs?",id:"why-red-team-llms",level:2},{value:"Security Challenges",id:"security-challenges",level:3},{value:"Functional Evaluation",id:"functional-evaluation",level:3},{value:"NeuralTrust Red Teaming Tools",id:"neuraltrust-red-teaming-tools",level:2},{value:"Core Use Cases",id:"core-use-cases",level:3},{value:"Automated Test Generation",id:"automated-test-generation",level:4},{value:"Automated response evaluation",id:"automated-response-evaluation",level:4},{value:"Compliance Scanner",id:"compliance-scanner",level:4},{value:"Domain-Specific Attack Generator",id:"domain-specific-attack-generator",level:4},{value:"Key Components",id:"key-components",level:3},{value:"Evaluation Sets",id:"evaluation-sets",level:4},{value:"Test Sets",id:"test-sets",level:4},{value:"Knowledge Bases",id:"knowledge-bases",level:4}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"whats-red-teaming-for-llms",children:"What's Red Teaming for LLMs?"})}),"\n",(0,t.jsx)(n.p,{children:"Red teaming is a critical practice for evaluating Large Language Models (LLMs) by systematically challenging their behaviors, safety measures, and potential vulnerabilities. While traditionally associated with security testing, LLM red teaming encompasses both security assessment and functional evaluation of model capabilities."}),"\n",(0,t.jsx)(n.h2,{id:"why-red-team-llms",children:"Why Red Team LLMs?"}),"\n",(0,t.jsx)(n.h3,{id:"security-challenges",children:"Security Challenges"}),"\n",(0,t.jsx)(n.p,{children:"LLMs can present unique risks and challenges that make security testing essential:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Prompt Injection/Jailbreak"}),": Attackers may attempt to manipulate model behavior through carefully crafted prompts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Leakage"}),": Models may inadvertently reveal sensitive training data or confidential information"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Harmful Outputs"}),": LLMs could generate inappropriate, biased, or dangerous content"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"functional-evaluation",children:"Functional Evaluation"}),"\n",(0,t.jsx)(n.p,{children:"Beyond security, red teaming helps assess and improve core model capabilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Task Performance"}),": Systematic testing of model abilities across different domains"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Edge Cases"}),": Identifying scenarios where the model might fail or underperform"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consistency"}),": Evaluating response reliability and logical coherence"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Domain Expertise"}),": Assessing knowledge depth and accuracy in specific fields"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Instruction Following"}),": Testing model's ability to adhere to complex requirements"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"neuraltrust-red-teaming-tools",children:"NeuralTrust Red Teaming Tools"}),"\n",(0,t.jsx)(n.p,{children:"NeuralTrust provides a comprehensive suite of tools to help evaluate, test, and secure your LLM applications through systematic testing and analysis."}),"\n",(0,t.jsx)(n.h3,{id:"core-use-cases",children:"Core Use Cases"}),"\n",(0,t.jsx)(n.h4,{id:"automated-test-generation",children:"Automated Test Generation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AI-powered test case generation for specific domains"}),"\n",(0,t.jsx)(n.li,{children:"Dynamic evaluation set creation"}),"\n",(0,t.jsx)(n.li,{children:"Scenario-based test synthesis"}),"\n",(0,t.jsx)(n.li,{children:"Coverage optimization"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"automated-response-evaluation",children:"Automated response evaluation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automated analysis of model outputs against defined criteria"}),"\n",(0,t.jsxs)(n.li,{children:["Response quality metrics:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Correctness: Accuracy of factual information"}),"\n",(0,t.jsx)(n.li,{children:"Completeness: Coverage of required information"}),"\n",(0,t.jsx)(n.li,{children:"Tone & Style: Appropriate language and formality level"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Custom evaluation criteria definition"}),"\n",(0,t.jsx)(n.li,{children:"Comparative analysis across different model versions"}),"\n",(0,t.jsx)(n.li,{children:"Batch processing of large-scale evaluations"}),"\n",(0,t.jsx)(n.li,{children:"Statistical analysis and reporting"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"compliance-scanner",children:(0,t.jsx)(n.a,{href:"/neuraltrust/red-teaming/scanner#scan-endpoint",children:"Compliance Scanner"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automated compliance checks against major standards"}),"\n",(0,t.jsx)(n.li,{children:"Detect model toxicity, off-topic, off-policy, data leakage, system configuration leakage and more"}),"\n",(0,t.jsx)(n.li,{children:"Policy adherence validation"}),"\n",(0,t.jsx)(n.li,{children:"Regulatory requirement testing"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"domain-specific-attack-generator",children:(0,t.jsx)(n.a,{href:"/neuraltrust/red-teaming/scanner#attack-endpoint",children:"Domain-Specific Attack Generator"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Custom attack pattern generation for specific industries"}),"\n",(0,t.jsx)(n.li,{children:"Domain-aware security testing"}),"\n",(0,t.jsx)(n.li,{children:"Industry-specific vulnerability assessment"}),"\n",(0,t.jsx)(n.li,{children:"Specialized jailbreak detection"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"key-components",children:"Key Components"}),"\n",(0,t.jsx)(n.p,{children:"NeuralTrust defines the following components to support the above use cases:"}),"\n",(0,t.jsx)("div",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Red Teaming Components",src:i(9624).A+""})})}),"\n",(0,t.jsx)(n.h4,{id:"evaluation-sets",children:(0,t.jsx)(n.a,{href:"/neuraltrust/red-teaming/evaluation-sets",children:"Evaluation Sets"})}),"\n",(0,t.jsx)(n.p,{children:"Set of a Test Sets, evaluation criteria, runs and results. Each evaluation set defines specific test scenarios, success metrics, and evaluation parameters needed to thoroughly assess model behavior. These sets can be customized for different testing objectives, from security validation to functional performance evaluation. Evaluation sets can be scheduled to run automatically at defined intervals, enabling continuous monitoring and assessment of model performance over time."}),"\n",(0,t.jsx)(n.h4,{id:"test-sets",children:(0,t.jsx)(n.a,{href:"/neuraltrust/red-teaming/testsets",children:"Test Sets"})}),"\n",(0,t.jsx)(n.p,{children:"Set of prompts and expected model responses pairs used in testing."}),"\n",(0,t.jsx)(n.h4,{id:"knowledge-bases",children:(0,t.jsx)(n.a,{href:"/neuraltrust/red-teaming/knowledge-bases",children:"Knowledge Bases"})}),"\n",(0,t.jsx)(n.p,{children:"Information source that provides the foundation for model testing and validation. These repositories contain verified reference data, domain expertise, testing patterns, and compliance requirements. Knowledge bases help ensure that evaluations are grounded in accurate information and align with industry standards and security policies."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9624:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/evaluation-sets-schema-1c172591eefcee73775da30c366dbad6.svg"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);