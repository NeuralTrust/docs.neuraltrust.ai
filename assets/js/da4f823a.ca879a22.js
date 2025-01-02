"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[5686],{1706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"sdks/java","title":"Java SDK","description":"NeuralTrust Java SDK documentation.","source":"@site/docs/sdks/java.md","sourceDirName":"sdks","slug":"/sdks/java","permalink":"/neuraltrust/sdks/java","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/sdks/java.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Go SDK","permalink":"/neuraltrust/sdks/go"},"next":{"title":"Development","permalink":"/neuraltrust/category/development"}}');var a=r(4848),s=r(8453);const i={sidebar_position:4},l="Java SDK",o={},u=[{value:"Installation",id:"installation",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Quick Start",id:"quick-start",level:2},{value:"Error Handling",id:"error-handling",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"java-sdk",children:"Java SDK"})}),"\n",(0,a.jsx)(n.p,{children:"NeuralTrust Java SDK documentation."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>ai.neuraltrust</groupId>\n    <artifactId>neuraltrust-sdk</artifactId>\n    <version>1.0.0</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",children:"implementation 'ai.neuraltrust:neuraltrust-sdk:1.0.0'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import ai.neuraltrust.NeuralTrust;\nimport ai.neuraltrust.models.*;\n\npublic class QuickStart {\n    public static void main(String[] args) {\n        NeuralTrust nt = new NeuralTrust("your_api_key");\n\n        // Secure an LLM request\n        SecureRequest request = SecureRequest.builder()\n            .provider("openai")\n            .model("gpt-4")\n            .message(Message.builder()\n                .role("user")\n                .content("Hello, world!")\n                .build())\n            .build();\n\n        SecureResponse response = nt.secure(request);\n\n        // Access monitoring\n        Metrics metrics = nt.metrics().getRecent();\n\n        // Configure alerts\n        AlertConfig alertConfig = AlertConfig.builder()\n            .name("High Error Rate")\n            .condition(AlertCondition.builder()\n                .metric("error_rate")\n                .threshold(0.05)\n                .build())\n            .build();\n\n        Alert alert = nt.alerts().create(alertConfig);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'try {\n    SecureResponse response = nt.secure(request);\n} catch (NeuralTrustException e) {\n    System.err.println("Error: " + e.getMessage());\n    System.err.println("Code: " + e.getCode());\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);