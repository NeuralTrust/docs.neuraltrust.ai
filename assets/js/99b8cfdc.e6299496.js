"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[3363],{9299:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"red-teaming/testsets","title":"Test Sets","description":"Test Sets are a fundamental component of the NeuralTrust platform that enable you to create and manage collections of test cases for AI model evaluation. Each test set contains multiple query-response pairs, where each pair consists of:","source":"@site/docs/red-teaming/testsets.md","sourceDirName":"red-teaming","slug":"/red-teaming/testsets","permalink":"/neuraltrust/red-teaming/testsets","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/red-teaming/testsets.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Evaluation Sets","permalink":"/neuraltrust/red-teaming/evaluation-sets"},"next":{"title":"Knowledge Bases","permalink":"/neuraltrust/red-teaming/knowledge-bases"}}');var r=s(4848),i=s(8453);const a={sidebar_position:3},o="Test Sets",l={},c=[{value:"Test Set API Methods",id:"test-set-api-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"test-sets",children:"Test Sets"})}),"\n",(0,r.jsx)(t.p,{children:"Test Sets are a fundamental component of the NeuralTrust platform that enable you to create and manage collections of test cases for AI model evaluation. Each test set contains multiple query-response pairs, where each pair consists of:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Query"}),': The prompt or input that will be sent to the LLM (e.g., "What is the capital of France?")']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Expected Response"}),': The correct or desired response that the LLM should provide (e.g., "The capital of France is Paris.")']}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"A single test set can contain dozens or hundreds of these query-response pairs, allowing you to thoroughly test your LLM across a wide range of scenarios. Test sets support both single-turn interactions and multi-turn conversations, enabling you to test:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Simple question-answer pairs"}),"\n",(0,r.jsx)(t.li,{children:"Complex dialogue scenarios with context"}),"\n",(0,r.jsx)(t.li,{children:"Multi-turn conversations where previous interactions matter"}),"\n",(0,r.jsx)(t.li,{children:"Conversation memory and context retention"}),"\n",(0,r.jsx)(t.li,{children:"Chat history dependent responses"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"These test sets work in conjunction with Evaluation Sets to provide comprehensive testing capabilities for your LLM applications."}),"\n",(0,r.jsx)(t.p,{children:"With Test Sets, you can:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create large collections of query-response pairs with specific testing objectives"}),"\n",(0,r.jsx)(t.li,{children:"Generate multiple test cases automatically from knowledge bases"}),"\n",(0,r.jsx)(t.li,{children:"Organize sets of tests by type (functional, security, compliance, etc.)"}),"\n",(0,r.jsx)(t.li,{children:"Reuse test cases across multiple evaluation sets"}),"\n",(0,r.jsx)(t.li,{children:"Track how well your LLM responses match the expected responses over time"}),"\n",(0,r.jsx)(t.li,{children:"Test conversation flows and multi-turn interactions"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Test Sets are particularly useful for:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Systematic testing of model capabilities and accuracy across many scenarios"}),"\n",(0,r.jsx)(t.li,{children:"Security and vulnerability assessment through multiple adversarial prompts"}),"\n",(0,r.jsx)(t.li,{children:"Compliance verification with expected response patterns at scale"}),"\n",(0,r.jsx)(t.li,{children:"Performance benchmarking against a comprehensive set of known good responses"}),"\n",(0,r.jsx)(t.li,{children:"Regression testing to ensure model behavior remains consistent across updates"}),"\n",(0,r.jsx)(t.li,{children:"Validation of contextual understanding in conversations"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"test-set-api-methods",children:"Test Set API Methods"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from neuraltrust import NeuralTrustApi\n\nclient = NeuralTrustApi(api_key="YOUR_API_KEY")\n\n# List all test sets\nclient.testset.list()\n\n# Create a new test set\n# num_questions parameter determines how many query-response pairs \n# will be generated from the knowledge base\nclient.testset.create(\n    name="My Test Set",\n    type="functional",\n    evaluation_set_id="eval-123",\n    knowledge_base_id="kb-456",\n    num_questions=10  # Will generate 10 query-response pairs\n)\n\n# Get a specific test set\nclient.testset.get(id="testset_123")\n\n# Delete a test set\nclient.testset.delete(id="testset_123")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For more information, see the ",(0,r.jsx)(t.a,{href:"/neuraltrust/sdks/python-sdk/api-reference/testset-client",children:"Test Sets API Reference"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);