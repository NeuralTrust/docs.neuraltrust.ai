"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[8556],{5615:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"trustgate/plugins/toxicity_detection/toxicity-openai-detection","title":"OpenAI Toxicity Detection","description":"Technical Overview","source":"@site/docs/trustgate/plugins/toxicity_detection/toxicity-openai-detection.md","sourceDirName":"trustgate/plugins/toxicity_detection","slug":"/trustgate/plugins/toxicity_detection/toxicity-openai-detection","permalink":"/trustgate/plugins/toxicity_detection/toxicity-openai-detection","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trustgate/plugins/toxicity_detection/toxicity-openai-detection.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"External API Plugin","permalink":"/trustgate/plugins/external-api"},"next":{"title":"Azure Toxicity Detection","permalink":"/trustgate/plugins/toxicity_detection/toxicity-azure-detection"}}');var t=i(4848),r=i(8453);const l={sidebar_position:6},o="OpenAI Toxicity Detection",c={},d=[{value:"Technical Overview",id:"technical-overview",level:2},{value:"Core Components",id:"core-components",level:3},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Message Processing",id:"message-processing",level:3},{value:"Content Types",id:"content-types",level:3},{value:"Moderation Categories",id:"moderation-categories",level:3},{value:"API Integration",id:"api-integration",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Performance Optimizations",id:"performance-optimizations",level:3},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Required Settings",id:"required-settings",level:3},{value:"Advanced Options",id:"advanced-options",level:3},{value:"Monitoring and Metrics",id:"monitoring-and-metrics",level:2},{value:"Features",id:"features",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Content Analysis",id:"content-analysis",level:3},{value:"Threshold Evaluation",id:"threshold-evaluation",level:3},{value:"Action Execution",id:"action-execution",level:3},{value:"Configuration Examples",id:"configuration-examples",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Threshold Configuration",id:"threshold-configuration",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Performance Considerations",id:"performance-considerations",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"openai-toxicity-detection",children:"OpenAI Toxicity Detection"})}),"\n",(0,t.jsx)(n.h2,{id:"technical-overview",children:"Technical Overview"}),"\n",(0,t.jsx)(n.p,{children:"The OpenAI Toxicity Detection plugin implements real-time content moderation using OpenAI's moderation API. It processes both text and image content through a multi-stage analysis pipeline."}),"\n",(0,t.jsx)(n.h3,{id:"core-components",children:"Core Components"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Content Extractor"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Processes multiple message types"}),"\n",(0,t.jsx)(n.li,{children:"Handles text and image URL content"}),"\n",(0,t.jsx)(n.li,{children:"Supports structured message formats"}),"\n",(0,t.jsx)(n.li,{children:"Maintains content context"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Moderation Engine"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Real-time API integration"}),"\n",(0,t.jsx)(n.li,{children:"Batch processing capability"}),"\n",(0,t.jsx)(n.li,{children:"Configurable thresholds"}),"\n",(0,t.jsx)(n.li,{children:"Category-specific scoring"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response Analyzer"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Score evaluation"}),"\n",(0,t.jsx)(n.li,{children:"Threshold comparison"}),"\n",(0,t.jsx)(n.li,{children:"Category aggregation"}),"\n",(0,t.jsx)(n.li,{children:"Detailed violation reporting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,t.jsx)(n.h3,{id:"message-processing",children:"Message Processing"}),"\n",(0,t.jsx)(n.p,{children:"The plugin processes messages in the following format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "messages": [\n        {\n            "role": "user",\n            "content": [\n                {\n                    "type": "text",\n                    "text": "message content"\n                },\n                {\n                    "type": "image_url",\n                    "image_url": {\n                        "url": "https://example.com/image.jpg"\n                    }\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"content-types",children:"Content Types"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Text Content"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct text analysis"}),"\n",(0,t.jsx)(n.li,{children:"Multi-message support"}),"\n",(0,t.jsx)(n.li,{children:"UTF-8 encoding"}),"\n",(0,t.jsx)(n.li,{children:"Length validation"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Image Content"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"URL-based processing"}),"\n",(0,t.jsx)(n.li,{children:"Image format validation"}),"\n",(0,t.jsx)(n.li,{children:"Size restrictions"}),"\n",(0,t.jsx)(n.li,{children:"Accessibility checks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"moderation-categories",children:"Moderation Categories"}),"\n",(0,t.jsx)(n.p,{children:"The plugin supports comprehensive content analysis across multiple categories:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Category"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Implementation Details"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sexual"}),(0,t.jsx)(n.td,{children:"Sexual content detection"}),(0,t.jsx)(n.td,{children:"- Base category scoring  \\n- Sub-category detection  \\n- Context analysis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Violence"}),(0,t.jsx)(n.td,{children:"Violence and threats"}),(0,t.jsx)(n.td,{children:"- Direct violence detection  \\n- Graphic content analysis  \\n- Threat assessment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hate"}),(0,t.jsx)(n.td,{children:"Hate speech and bias"}),(0,t.jsx)(n.td,{children:"- Bias detection  \\n- Discriminatory content  \\n- Hate speech patterns"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Self-harm"}),(0,t.jsx)(n.td,{children:"Self-harm content"}),(0,t.jsx)(n.td,{children:"- Intent detection  \\n- Instruction filtering  \\n- Risk assessment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Harassment"}),(0,t.jsx)(n.td,{children:"Harassment detection"}),(0,t.jsx)(n.td,{children:"- Personal attacks  \\n- Threatening behavior  \\n- Bullying patterns"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Illicit"}),(0,t.jsx)(n.td,{children:"Illegal activity"}),(0,t.jsx)(n.td,{children:"- Criminal content  \\n- Prohibited activities  \\n- Legal compliance"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"api-integration",children:"API Integration"}),"\n",(0,t.jsx)(n.p,{children:"The plugin integrates with OpenAI's moderation API:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Request Formation"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "input": [\n        {\n            "type": "text",\n            "text": "content to moderate"\n        }\n    ],\n    "model": "omni-moderation-latest"\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Response Processing"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": "modr-123",\n    "model": "omni-moderation-latest",\n    "results": [\n        {\n            "flagged": true,\n            "categories": {\n                "sexual": false,\n                "violence": true\n            },\n            "category_scores": {\n                "sexual": 0.01,\n                "violence": 0.92\n            }\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,t.jsx)(n.p,{children:"The plugin implements comprehensive error handling:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configuration Validation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"API key verification"}),"\n",(0,t.jsx)(n.li,{children:"Action type validation"}),"\n",(0,t.jsx)(n.li,{children:"Threshold validation"}),"\n",(0,t.jsx)(n.li,{children:"Category validation"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Runtime Error Handling"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"API connection errors"}),"\n",(0,t.jsx)(n.li,{children:"Response parsing errors"}),"\n",(0,t.jsx)(n.li,{children:"Timeout handling"}),"\n",(0,t.jsx)(n.li,{children:"Rate limit management"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Content Processing Errors"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Invalid content format"}),"\n",(0,t.jsx)(n.li,{children:"Missing required fields"}),"\n",(0,t.jsx)(n.li,{children:"Size limit violations"}),"\n",(0,t.jsx)(n.li,{children:"Encoding issues"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"performance-optimizations",children:"Performance Optimizations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request Processing"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Batch message processing"}),"\n",(0,t.jsx)(n.li,{children:"Efficient JSON parsing"}),"\n",(0,t.jsx)(n.li,{children:"Minimal memory allocation"}),"\n",(0,t.jsx)(n.li,{children:"Request pooling"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response Handling"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Streaming response processing"}),"\n",(0,t.jsx)(n.li,{children:"Efficient score calculation"}),"\n",(0,t.jsx)(n.li,{children:"Early termination"}),"\n",(0,t.jsx)(n.li,{children:"Result caching"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-reference",children:"Configuration Reference"}),"\n",(0,t.jsx)(n.h3,{id:"required-settings",children:"Required Settings"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "openai_key": "YOUR_API_KEY",\n    "actions": {\n        "type": "block",\n        "message": "Content violation detected"\n    },\n    "categories": ["sexual", "violence", "hate"],\n    "thresholds": {\n        "sexual": 0.3,\n        "violence": 0.5,\n        "hate": 0.4\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"advanced-options",children:"Advanced Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Custom error messages"}),"\n",(0,t.jsx)(n.li,{children:"Category-specific actions"}),"\n",(0,t.jsx)(n.li,{children:"Threshold adjustments"}),"\n",(0,t.jsx)(n.li,{children:"Logging configuration"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"monitoring-and-metrics",children:"Monitoring and Metrics"}),"\n",(0,t.jsx)(n.p,{children:"The plugin provides detailed monitoring capabilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Request/response logging"}),"\n",(0,t.jsx)(n.li,{children:"Category score tracking"}),"\n",(0,t.jsx)(n.li,{children:"Error rate monitoring"}),"\n",(0,t.jsx)(n.li,{children:"Performance metrics"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"Capabilities"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Multi-Category Detection"}),(0,t.jsxs)(n.td,{children:["\u2022 Comprehensive content analysis across multiple categories (sexual, violence, hate, etc.)  ",(0,t.jsx)("br",{}),"\u2022 Real-time detection with configurable sensitivity levels  ",(0,t.jsx)("br",{}),"\u2022 Customizable thresholds per category"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Flexible Actions"}),(0,t.jsxs)(n.td,{children:["\u2022 Configurable response actions  ",(0,t.jsx)("br",{}),"\u2022 Custom error messages  ",(0,t.jsx)("br",{}),"\u2022 Block or allow decisions"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OpenAI Integration"}),(0,t.jsxs)(n.td,{children:["\u2022 Powered by OpenAI's moderation API  ",(0,t.jsx)("br",{}),"\u2022 Real-time content analysis  ",(0,t.jsx)("br",{}),"\u2022 High accuracy detection"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Request Stage Processing"}),(0,t.jsxs)(n.td,{children:["\u2022 Pre-request content analysis  ",(0,t.jsx)("br",{}),"\u2022 Configurable priority in plugin chain  ",(0,t.jsx)("br",{}),"\u2022 Non-blocking architecture"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,t.jsx)(n.h3,{id:"content-analysis",children:"Content Analysis"}),"\n",(0,t.jsx)(n.p,{children:"The plugin analyzes incoming requests by examining both text and image content for various types of toxic or inappropriate material. For text content, it processes the content directly through OpenAI's moderation API. For images, it can analyze image URLs provided in the request. The results are evaluated against configured thresholds:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// Example Request Content - Text\n{\n    "messages": [\n        {\n            "role": "user",\n            "content": [\n                {\n                    "type": "text",\n                    "text": "Let\'s discuss this topic respectfully"\n                }\n            ]\n        }\n    ]\n}\n\n// OpenAI Moderation API Response (Internal)\n{\n    "results": [\n        {\n            "category_scores": {\n                "sexual": 0.0001,\n                "violence": 0.0002,\n                "hate": 0.0001\n            }\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"threshold-evaluation",children:"Threshold Evaluation"}),"\n",(0,t.jsx)(n.p,{children:"Each category has its own configurable threshold. Content is blocked if any category's score exceeds its threshold:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "thresholds": {\n        "sexual": 0.3,    // Block if sexual content score > 0.3\n        "violence": 0.5,  // Block if violence score > 0.5\n        "hate": 0.4      // Block if hate speech score > 0.4\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"action-execution",children:"Action Execution"}),"\n",(0,t.jsx)(n.p,{children:"Based on the evaluation results, the plugin can take configured actions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "actions": {\n        "type": "block",\n        "message": "Content contains inappropriate content."\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-examples",children:"Configuration Examples"}),"\n",(0,t.jsx)(n.h3,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,t.jsx)(n.p,{children:"A simple configuration that enables toxicity detection with default settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "toxicity_detection",\n    "enabled": true,\n    "stage": "pre_request",\n    "priority": 1,\n    "settings": {\n        "openai_key": "${OPENAI_API_KEY}",\n        "actions": {\n            "type": "block",\n            "message": "Content contains inappropriate content."\n        },\n        "categories": [\n            "sexual",\n            "violence",\n            "hate"\n        ],\n        "thresholds": {\n            "sexual": 0.3,\n            "violence": 0.5,\n            "hate": 0.4\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Key components of the basic configuration:"}),"\n",(0,t.jsx)("h4",{align:"center",children:(0,t.jsx)("strong",{children:(0,t.jsx)("u",{children:"Plugin Settings"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:"Plugin identifier"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:'"toxicity_detection"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"enabled"})}),(0,t.jsx)(n.td,{children:"Enable/disable plugin"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"true"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"stage"})}),(0,t.jsx)(n.td,{children:"Processing stage"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:'"pre_request"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"priority"})}),(0,t.jsx)(n.td,{children:"Plugin execution priority"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsx)("h4",{align:"center",children:(0,t.jsx)("strong",{children:(0,t.jsx)("u",{children:"Category Thresholds"})})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Category"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default Threshold"}),(0,t.jsx)(n.th,{children:"Impact"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sexual"})}),(0,t.jsx)(n.td,{children:"Sexual content detection"}),(0,t.jsx)(n.td,{children:"0.3"}),(0,t.jsx)(n.td,{children:"Lower values = stricter filtering"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"violence"})}),(0,t.jsx)(n.td,{children:"Violence detection"}),(0,t.jsx)(n.td,{children:"0.5"}),(0,t.jsx)(n.td,{children:"Higher values = more permissive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hate"})}),(0,t.jsx)(n.td,{children:"Hate speech detection"}),(0,t.jsx)(n.td,{children:"0.4"}),(0,t.jsx)(n.td,{children:"Balance based on needs"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This configuration:"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 Focuses solely on ",(0,t.jsx)(n.strong,{children:"violence detection"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 Sets a moderate threshold of ",(0,t.jsx)(n.strong,{children:"0.5"})," for violent content"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 Provides a ",(0,t.jsx)(n.strong,{children:"specific error message"})," for violent content"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 Enables warning-level ",(0,t.jsx)(n.strong,{children:"logging"})," for ",(0,t.jsx)(n.strong,{children:"monitoring"})]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(n.h3,{id:"threshold-configuration",children:"Threshold Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Content Policy Alignment"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Set thresholds according to your content policy"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Consider your audience and use case"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Test thresholds with sample content"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Category Selection"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Enable relevant categories for your use case"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Consider regulatory requirements"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Balance between safety and usability"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Performance Considerations"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Set appropriate plugin priority"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Consider API rate limits"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Monitor response times"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"API Key Management"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Secure storage of OpenAI API key"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Regular key rotation"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Access control for configuration changes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logging and Monitoring"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Enable appropriate logging"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Monitor blocked content patterns"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Regular threshold adjustments"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,t.jsxs)(n.p,{children:["The Toxicity Detection plugin uses a straightforward ",(0,t.jsx)(n.strong,{children:"HTTP client"})," implementation to interact with OpenAI's moderation API. The plugin processes requests sequentially, making direct API calls to OpenAI's moderation endpoint for each incoming request. The implementation includes comprehensive ",(0,t.jsx)(n.strong,{children:"logging"})," at various levels (debug, info, error) to help track and diagnose the plugin's behavior."]}),"\n",(0,t.jsxs)(n.p,{children:["The plugin performs efficient ",(0,t.jsx)(n.strong,{children:"JSON processing"})," by unmarshaling only the required fields from the request and response bodies. It concatenates multiple messages with newlines when needed and processes them in a single API call to OpenAI, which helps reduce the number of API requests when handling multi-message content."]}),"\n",(0,t.jsxs)(n.p,{children:["The plugin's architecture is designed to be ",(0,t.jsx)(n.strong,{children:"lightweight"}),", with minimal memory overhead as it doesn't maintain any state between requests. However, be aware that each request will incur the latency of an HTTP call to OpenAI's API. Consider this when planning your rate limits and timeout configurations, as the total processing time will largely depend on OpenAI's API response time."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);