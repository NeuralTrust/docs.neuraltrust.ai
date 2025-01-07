"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[1361],{8594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"getting-started/quickstart","title":"Quick Start","description":"This guide will help you get started with Neural Trust quickly using our Python SDK.","source":"@site/docs/getting-started/quickstart.md","sourceDirName":"getting-started","slug":"/getting-started/quickstart","permalink":"/neuraltrust/getting-started/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/getting-started/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Welcome to NeuralTrust","permalink":"/neuraltrust/getting-started/overview"},"next":{"title":"AI Gateway","permalink":"/neuraltrust/category/ai-gateway"}}');var s=t(4848),i=t(8453);const r={sidebar_position:2},l="Quick Start",u={},c=[{value:"Installation",id:"installation",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Quick Examples",id:"quick-examples",level:2},{value:"Running a Basic Security Scan",id:"running-a-basic-security-scan",level:3},{value:"Creating and Running an Evaluation Set",id:"creating-and-running-an-evaluation-set",level:3},{value:"Checking Evaluation Results",id:"checking-evaluation-results",level:3},{value:"Next Steps",id:"next-steps",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you get started with Neural Trust quickly using our Python SDK."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"First, install the Neural Trust Python SDK using pip:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install neuraltrust\n"})}),"\n",(0,s.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:".env"})," file in your project root with your Neural Trust credentials:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"NEURALTRUST_API_KEY=your_api_key_here\nUPSTASH_URL=your_upstash_url    # Optional: Required only for knowledge bases\nUPSTASH_TOKEN=your_upstash_token # Optional: Required only for knowledge bases\n"})}),"\n",(0,s.jsx)(n.p,{children:"Load these environment variables in your Python code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\nfrom dotenv import load_dotenv\nfrom neuraltrust import NeuralTrust\n\nload_dotenv()\nclient = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"quick-examples",children:"Quick Examples"}),"\n",(0,s.jsx)(n.h3,{id:"running-a-basic-security-scan",children:"Running a Basic Security Scan"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Run a basic security scan\nscan_result = client.scanner.scan(\n    name="Quick Security Check",\n    categories=["off_tone", "data_leak"],\n    max_objectives_per_category=5\n)\n\nprint(f"Scan completed with ID: {scan_result.id}")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"creating-and-running-an-evaluation-set",children:"Creating and Running an Evaluation Set"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Create a knowledge base\nknowledge_base = client.knowledge_base.create(\n    type="upstash",\n    credentials={\n        "UPSTASH_URL": os.getenv("UPSTASH_URL"),\n        "UPSTASH_TOKEN": os.getenv("UPSTASH_TOKEN"),\n    },\n    seed_topics=["Customer Service"]\n)\n\n# Create an evaluation set\neval_set = client.evaluation_set.create(\n    name="Basic Customer Service Evaluation",\n    description="Testing customer service responses"\n)\n\n# Generate test cases\ntest_set = client.testset.create(\n    name="Customer Service Tests",\n    type="adversarial",\n    evaluation_set_id=eval_set.id,\n    num_questions=5,\n    knowledge_base_id=knowledge_base.id\n)\n\n# Run the evaluation\nclient.evaluation_set.run(id=eval_set.id)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"checking-evaluation-results",children:"Checking Evaluation Results"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# List all evaluation sets\nevaluation_sets = client.evaluation_sets.list()\n\n# Get details of a specific evaluation\neval_details = client.evaluation_set.get(id=eval_set.id)\nprint(f"Evaluation Status: {eval_details.status}")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"For more detailed information, check out these guides:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../observability/tracing.md",children:"Detailed Tracing Guide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/neuraltrust/red-teaming/evaluation-sets",children:"Evaluation Sets Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/neuraltrust/red-teaming/knowledge-bases",children:"Knowledge Base Guide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/neuraltrust/red-teaming/testsets",children:"Test Sets Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/neuraltrust/sdks/python-sdk/usage/scan",children:"Security Scanning Guide"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);