"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[5432],{530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"trustgate/plugins/toxicity_detection/toxicity-azure-detection","title":"Azure Toxicity Detection","description":"Overview","source":"@site/docs/trustgate/plugins/toxicity_detection/toxicity-azure-detection.md","sourceDirName":"trustgate/plugins/toxicity_detection","slug":"/trustgate/plugins/toxicity_detection/toxicity-azure-detection","permalink":"/trustgate/plugins/toxicity_detection/toxicity-azure-detection","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trustgate/plugins/toxicity_detection/toxicity-azure-detection.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"OpenAI Toxicity Detection","permalink":"/trustgate/plugins/toxicity_detection/toxicity-openai-detection"},"next":{"title":"AWS Bedrock Guardrail","permalink":"/trustgate/plugins/prompt-guard/bedrock-guardrail"}}');var s=t(4848),r=t(8453);const o={sidebar_position:7},a="Azure Toxicity Detection",c={},l=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Content Analysis Capabilities",id:"content-analysis-capabilities",level:3},{value:"Performance and Integration",id:"performance-and-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"<strong><em>Essential Settings</em></strong>",id:"essential-settings",level:4},{value:"<strong><em>Content Type Configuration</em></strong>",id:"content-type-configuration",level:4},{value:"<strong><em>Category Settings</em></strong>",id:"category-settings",level:4},{value:"<strong><em>Action Configuration</em></strong>",id:"action-configuration",level:4},{value:"Advanced Configuration",id:"advanced-configuration",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Text Content Analysis",id:"text-content-analysis",level:3},{value:"Image Content Analysis",id:"image-content-analysis",level:3},{value:"Response Format",id:"response-format",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Configuration Guidelines",id:"configuration-guidelines",level:3},{value:"Performance Optimization",id:"performance-optimization",level:3},{value:"Error Handling",id:"error-handling",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"azure-toxicity-detection",children:"Azure Toxicity Detection"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Azure Toxicity Detection"}),"  plugin is an advanced content moderation layer that leverages Azure's Content Safety API ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview",children:"Azure Content Safety"})," to analyze and filter potentially harmful content in both text and images. This plugin provides comprehensive content analysis across multiple categories and supports both text-based and image-based content moderation."]}),"\n",(0,s.jsx)(n.p,{children:"The plugin features a sophisticated multi-category detection system that can identify various types of inappropriate content, with configurable severity levels for each category:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Category"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hate"}),(0,s.jsx)(n.td,{children:"Content expressing hatred or discrimination"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Violence"}),(0,s.jsx)(n.td,{children:"Content depicting or promoting violence"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SelfHarm"}),(0,s.jsx)(n.td,{children:"Content related to self-harm behaviors"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sexual"}),(0,s.jsx)(n.td,{children:"Sexually explicit or inappropriate content"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Each category can be individually configured with specific severity thresholds, allowing for fine-grained control over content moderation policies. The plugin supports two output types for severity levels:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Severity Level Description"}),(0,s.jsx)("th",{children:"FourSeverityLevels"}),(0,s.jsx)("th",{children:"EightSeverityLevels"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"Safety/Very Low Risk Content"}),(0,s.jsx)("td",{rowspan:"2",children:"0"}),(0,s.jsx)("td",{rowspan:"1",children:" 0 "})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:"1"})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"Low Risk Content"}),(0,s.jsx)("td",{rowspan:"2",children:"2"}),(0,s.jsx)("td",{rowspan:"1",children:" 2 "})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:"3"})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"Medium Risk Content"}),(0,s.jsx)("td",{rowspan:"2",children:"4"}),(0,s.jsx)("td",{rowspan:"1",children:" 4 "})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:"5"})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"High Risk Content"}),(0,s.jsx)("td",{rowspan:"2",children:"6"}),(0,s.jsx)("td",{rowspan:"1",children:" 6 "})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:"7"})})]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"content-analysis-capabilities",children:"Content Analysis Capabilities"}),"\n",(0,s.jsx)(n.p,{children:"The Azure Toxicity Detection plugin offers comprehensive content analysis features:"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Multi-Modal Analysis"}),": Supports both text and image content analysis, enabling comprehensive content screening across different media types. The plugin processes text inputs for harmful language and analyzes images for inappropriate visual content, providing a unified moderation solution for mixed-media applications"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Configurable Categories"}),": Flexible category selection and threshold configuration, allowing for tailored content moderation policies"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Severity Level Control"}),": Two output types for different granularity needs, providing flexibility in how content is evaluated and acted upon"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Custom Actions"}),": Configurable response actions and error messages, allowing for tailored responses to detected content violations"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Content Path Specification"}),": Flexible content extraction from various request formats, enabling precise content extraction from different request types"]}),"\n",(0,s.jsx)(n.h3,{id:"performance-and-integration",children:"Performance and Integration"}),"\n",(0,s.jsxs)(n.p,{children:["The Azure Toxicity Detection plugin is engineered for seamless ",(0,s.jsx)(n.strong,{children:"integration"})," and highly efficient ",(0,s.jsx)(n.strong,{children:"operation"})," in production environments. It provides ",(0,s.jsx)(n.strong,{children:"real-time"})," content evaluation capabilities through its immediate analysis system, allowing for instant moderation decisions. The plugin implements configurable endpoints that enable separate processing paths for both text and image content, ensuring optimal handling of different content types. This architecture supports rapid content screening while maintaining high performance standards."]}),"\n",(0,s.jsxs)(n.p,{children:["The plugin delivers comprehensive analysis results through detailed ",(0,s.jsx)(n.strong,{children:"response"})," data that includes precise ",(0,s.jsx)(n.strong,{children:"severity"})," scores across all configured categories. These detailed insights enable informed ",(0,s.jsx)(n.strong,{children:"decision-making"})," based on content risk levels. Additionally, the system incorporates robust ",(0,s.jsx)(n.strong,{children:"error"})," handling and logging mechanisms that ensure reliable operation even under challenging conditions, maintaining system stability while providing clear visibility into the moderation process. The combination of detailed analytics and dependable error management makes the plugin a reliable choice for content moderation needs."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Here's a basic configuration example that enables both text and image content moderation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "toxicity_azure",\n    "enabled": true,\n    "stage": "pre_request",\n    "priority": 1,\n    "settings": {\n        "api_key": "${AZURE_API_KEY}",\n        "endpoints": {\n            "text": "https://your-region.api.cognitive.microsoft.com/contentsafety/text/analyze",\n            "image": "https://your-region.api.cognitive.microsoft.com/contentsafety/image/analyze"\n        },\n        "output_type": "FourSeverityLevels",\n        "content_types": [\n            {\n                "type": "text",\n                "path": "text"\n            },\n            {\n                "type": "image",\n                "path": "image_data"\n            }\n        ],\n        "actions": {\n            "type": "block",\n            "message": "Content violates safety guidelines"\n        },\n        "category_severity": {\n            "Hate": 2,\n            "Violence": 2,\n            "SelfHarm": 2,\n            "Sexual": 2\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This basic configuration establishes a comprehensive ",(0,s.jsx)(n.strong,{children:"content moderation"})," setup that processes both text and image content through Azure's Content Safety API. It operates at the ",(0,s.jsx)(n.strong,{children:"pre-request"})," stage with priority 1, ensuring content is analyzed before reaching your application. The configuration uses the ",(0,s.jsx)(n.strong,{children:"FourSeverityLevels"})," system with a conservative threshold of 2 across all categories, meaning it will flag content that presents even low-risk concerns. The content_types setting enables the plugin to extract content from specific JSON paths in the request body, with 'text' being extracted from the 'text' field and image content from the 'image_data' field. When violations are detected, the plugin blocks the request and returns a clear ",(0,s.jsx)(n.strong,{children:"violation message"}),", providing immediate feedback to users about content policy violations."]}),"\n",(0,s.jsx)(n.h3,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"essential-settings",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Essential Settings"})})}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"API_KEY"}),": Your Azure Content Safety API key"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"ENDPOINTS"}),": Configuration for text and image analysis endpoints"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"TEXT"}),": Azure endpoint for text content analysis"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"IMAGE"}),": Azure endpoint for image content analysis"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"OUTPUT_TYPE"}),': Severity level format ("FourSeverityLevels" or "EightSeverityLevels")']}),"\n",(0,s.jsx)(n.h4,{id:"content-type-configuration",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Content Type Configuration"})})}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"CONTENT_TYPES"}),": Array of content type configurations"]}),"\n",(0,s.jsxs)(n.p,{children:["\xa0 \xa0 \xa0 \xa0 \xa0\u2022 ",(0,s.jsx)("code",{children:"TYPE"}),': Content type ("text" or "image")']}),"\n",(0,s.jsxs)(n.p,{children:["\xa0 \xa0 \xa0 \xa0 \xa0\u2022 ",(0,s.jsx)("code",{children:"PATH"}),": JSON path to extract content from request"]}),"\n",(0,s.jsx)(n.h4,{id:"category-settings",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Category Settings"})})}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"CATEGORY_SEVERITY"}),": Threshold configuration for each category"]}),"\n",(0,s.jsx)(n.p,{children:"\xa0 \xa0 \xa0 \xa0 \xa0\u2022 Values for FourSeverityLevels: 0, 2, 4, or 6"}),"\n",(0,s.jsx)(n.p,{children:"\xa0 \xa0 \xa0 \xa0 \xa0\u2022 Values for EightSeverityLevels: 0 to 7"}),"\n",(0,s.jsx)(n.h4,{id:"action-configuration",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Action Configuration"})})}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)("code",{children:"ACTIONS"}),": Response configuration for detected violations"]}),"\n",(0,s.jsxs)(n.p,{children:["\xa0 \xa0 \xa0 \xa0 \xa0\u2022 ",(0,s.jsx)("code",{children:"TYPE"}),': Action type (e.g., "block")']}),"\n",(0,s.jsxs)(n.p,{children:["\xa0 \xa0 \xa0 \xa0 \xa0\u2022 ",(0,s.jsx)("code",{children:"MESSAGE"}),": Custom error message"]}),"\n",(0,s.jsx)(n.h3,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of a more detailed configuration with custom severity levels:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "toxicity_azure",\n    "enabled": true,\n    "stage": "pre_request",\n    "priority": 1,\n    "settings": {\n        "api_key": "${AZURE_API_KEY}",\n        "endpoints": {\n            "text": "${AZURE_TEXT_ENDPOINT}",\n            "image": "${AZURE_IMAGE_ENDPOINT}"\n        },\n        "output_type": "EightSeverityLevels",\n        "content_types": [\n            {\n                "type": "text",\n                "path": "text"\n            },\n            {\n                "type": "image",\n                "path": "image_data"\n            }\n        ],\n        "actions": {\n            "type": "block",\n            "message": "Content violates our community guidelines"\n        },\n        "category_severity": {\n            "Hate": 3,\n            "Violence": 4,\n            "SelfHarm": 2,\n            "Sexual": 5\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsx)(n.h3,{id:"text-content-analysis",children:"Text Content Analysis"}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of analyzing text content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: your-subdomain.example.com" \\\n    -H "X-API-Key: YOUR_API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n        "text": "This is a test message for content analysis"\n    }\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"image-content-analysis",children:"Image Content Analysis"}),"\n",(0,s.jsx)(n.p,{children:"Example of analyzing an image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: your-subdomain.example.com" \\\n    -H "X-API-Key: YOUR_API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n        "image_data": "BASE64_ENCODED_IMAGE_CONTENT"\n    }\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"response-format",children:"Response Format"}),"\n",(0,s.jsx)(n.p,{children:"The plugin provides detailed analysis results in its response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "analysis_results": [\n        {\n            "category": "Hate",\n            "severity": 1,\n            "severityLevel": 2\n        },\n        {\n            "category": "Violence",\n            "severity": 0,\n            "severityLevel": 2\n        }\n    ],\n    "is_blocked": false,\n    "blocked_categories": []\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,s.jsx)(n.p,{children:"When configuring the Azure Toxicity Detection plugin, consider these practices:"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"API Key Security"}),": Always use environment variables for the API key. Store sensitive credentials in a secure environment file (.env) and never commit them to version control. Implement proper key rotation and access control policies."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Endpoint Configuration"}),": Use region-specific endpoints for better performance. Choose the Azure endpoint closest to your application's geographic location. Consider implementing endpoint failover for high availability scenarios."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Severity Thresholds"}),": Start with conservative thresholds and adjust based on needs. Monitor false positives and gradually tune thresholds based on real usage patterns. Document threshold changes and their impact on detection accuracy."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Content Paths"}),": Configure precise content paths to ensure accurate content extraction. Map your application's content structure carefully and validate path configurations. Regularly test path configurations with different content types."]}),"\n",(0,s.jsx)(n.h3,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,s.jsx)(n.p,{children:"To optimize the plugin's performance:"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Request Size"}),": Keep image sizes reasonable to improve response times. Implement client-side image compression before upload. Consider setting maximum size limits and providing feedback to users when exceeded."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Content Type Selection"}),": Only enable needed content types. Disable unused content type analyzers to reduce processing overhead. Review and update enabled content types based on your application's requirements."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Category Selection"}),": Configure only necessary categories for analysis. Focus on categories relevant to your use case to minimize processing time. Regularly review category effectiveness and remove unused ones."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Error Handling"}),": Implement appropriate error handling in your application. Set up retry mechanisms for transient failures and graceful degradation. Provide meaningful error messages to end users while logging detailed information for debugging."]}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"The plugin provides detailed error information in case of issues:"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Invalid Configuration"}),": Clear error messages for configuration problems. Includes specific validation errors for each configuration parameter. Provides guidance on how to correct common configuration mistakes."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"API Errors"}),": Detailed Azure API error responses. Includes error codes, descriptions, and recommended actions. Maintains correlation IDs for tracking issues across systems."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Content Extraction"}),": Specific errors for content extraction issues. Details about file format problems, encoding issues, or size limitations. Suggests appropriate content formatting requirements."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Threshold Violations"}),": Detailed information about blocked content. Includes specific categories and severity scores that triggered the block. Provides context for content moderation decisions."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);