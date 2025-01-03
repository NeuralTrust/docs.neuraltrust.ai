"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[5217],{5995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"red-teaming/knowledge-bases","title":"Knowledge Bases","description":"Knowledge Bases are a powerful feature of the NeuralTrust platform that allow you to create and manage specialized knowledge repositories for AI model testing and evaluation. They provide a structured way to organize domain-specific information that can be used to enhance your model testing capabilities.","source":"@site/docs/red-teaming/knowledge-bases.md","sourceDirName":"red-teaming","slug":"/red-teaming/knowledge-bases","permalink":"/neuraltrust/red-teaming/knowledge-bases","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/red-teaming/knowledge-bases.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Test Sets","permalink":"/neuraltrust/red-teaming/testsets"},"next":{"title":"Model Scanner","permalink":"/neuraltrust/red-teaming/scanner"}}');var a=t(4848),r=t(8453);const i={sidebar_position:4},o="Knowledge Bases",l={},d=[{value:"Supported Knowledge Base Types",id:"supported-knowledge-base-types",level:2},{value:"Knowledge Base API Methods",id:"knowledge-base-api-methods",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"knowledge-bases",children:"Knowledge Bases"})}),"\n",(0,a.jsx)(n.p,{children:"Knowledge Bases are a powerful feature of the NeuralTrust platform that allow you to create and manage specialized knowledge repositories for AI model testing and evaluation. They provide a structured way to organize domain-specific information that can be used to enhance your model testing capabilities."}),"\n",(0,a.jsx)(n.p,{children:"With Knowledge Bases, you can:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create specialized knowledge repositories for different domains"}),"\n",(0,a.jsx)(n.li,{children:"Seed knowledge bases with initial topics and data"}),"\n",(0,a.jsx)(n.li,{children:"Use knowledge bases to generate more targeted and relevant test cases"}),"\n",(0,a.jsx)(n.li,{children:"Manage credentials and access controls for different knowledge sources"}),"\n",(0,a.jsx)(n.li,{children:"Integrate with various data sources and knowledge systems"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Knowledge Bases are particularly useful for:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Domain-specific testing of AI models"}),"\n",(0,a.jsx)(n.li,{children:"Generating contextually relevant test cases"}),"\n",(0,a.jsx)(n.li,{children:"Maintaining consistent testing knowledge across teams"}),"\n",(0,a.jsx)(n.li,{children:"Supporting specialized compliance and security testing scenarios"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"supported-knowledge-base-types",children:"Supported Knowledge Base Types"}),"\n",(0,a.jsx)(n.p,{children:"NeuralTrust currently supports the following knowledge base types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Upstash"})," - Vector database for real-time data storage and retrieval"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Azure AI Search"})," - Cognitive search service for fast and sophisticated data indexing"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Company Documents"})," - Support for PDF documents and other company materials","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Automatically indexes and processes PDF content"}),"\n",(0,a.jsx)(n.li,{children:"Maintains document hierarchy and relationships"}),"\n",(0,a.jsx)(n.li,{children:"Extracts key information and metadata"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"knowledge-base-api-methods",children:"Knowledge Base API Methods"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from neuraltrust import NeuralTrustApi\n\nclient = NeuralTrustApi(api_key="YOUR_API_KEY")\n\n# Create a new knowledge base\nclient.knowledge_base.create(\n    type="your_kb_type",  # "upstash", "azure_search", or "document"\n    credentials={"key": "value"},\n    seed_topics=["topic1", "topic2"]\n)\n\n# Get a specific knowledge base\nclient.knowledge_base.get(id="kb_123")\n\n# Delete a knowledge base\nclient.knowledge_base.delete(id="kb_123")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);