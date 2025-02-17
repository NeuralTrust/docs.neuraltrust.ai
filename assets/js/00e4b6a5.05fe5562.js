"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[4530],{62908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"trustgate/plugins/token-rate-limiting","title":"Token Rate Limiting","description":"TrustGate implements a token bucket-based rate limiting system specifically designed for AI model interactions. This system manages both the number of requests and the token usage per API key.","source":"@site/docs/trustgate/plugins/token-rate-limiting.md","sourceDirName":"trustgate/plugins","slug":"/trustgate/plugins/token-rate-limiting","permalink":"/trustgate/plugins/token-rate-limiting","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trustgate/plugins/token-rate-limiting.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Token Rate Limiting"},"sidebar":"tutorialSidebar","previous":{"title":"Rate Limiting","permalink":"/trustgate/plugins/rate-limiting"},"next":{"title":"Prompt Moderation","permalink":"/trustgate/plugins/prompt-moderation"}}');var i=t(74848),r=t(28453);const l={sidebar_position:3,title:"Token Rate Limiting"},o="Token Rate Limiting",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"How It Works",id:"how-it-works",level:2},{value:"Token Bucket Algorithm",id:"token-bucket-algorithm",level:3},{value:"Token Replenishment",id:"token-replenishment",level:3},{value:"Response Headers",id:"response-headers",level:2},{value:"Rate Limit Response",id:"rate-limit-response",level:2},{value:"Streaming Support",id:"streaming-support",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Storage",id:"storage",level:3},{value:"Key Format",id:"key-format",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Example Usage",id:"example-usage",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"token-rate-limiting",children:"Token Rate Limiting"})}),"\n",(0,i.jsx)(n.p,{children:"TrustGate implements a token bucket-based rate limiting system specifically designed for AI model interactions. This system manages both the number of requests and the token usage per API key."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The token rate limiter operates on two dimensions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Token Usage"}),": Controls the total number of tokens consumed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Request Count"}),": Limits the number of requests per minute"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "required_plugins": [\n    {\n      "name": "token_rate_limiter",\n      "enabled": true,\n      "settings": {\n        "tokens_per_request": 1000,    // Default tokens reserved per request\n        "tokens_per_minute": 10000,    // Token replenishment rate\n        "bucket_size": 50000,         // Maximum token capacity\n        "requests_per_minute": 60     // Maximum requests per minute\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"tokens_per_request"}),": Default number of tokens reserved for each request when actual usage cannot be determined"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"tokens_per_minute"}),": Rate at which tokens are replenished (per minute)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"bucket_size"}),": Maximum number of tokens that can be accumulated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"requests_per_minute"}),": Maximum number of requests allowed per minute"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsx)(n.h3,{id:"token-bucket-algorithm",children:"Token Bucket Algorithm"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pre-Request Phase"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Checks if enough tokens are available in the bucket"}),"\n",(0,i.jsx)(n.li,{children:"Reserves tokens for the request"}),"\n",(0,i.jsx)(n.li,{children:"Verifies request count limits"}),"\n",(0,i.jsx)(n.li,{children:"For streaming requests, deducts tokens immediately"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Post-Response Phase"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Calculates actual token usage from the response"}),"\n",(0,i.jsx)(n.li,{children:"Updates the bucket with actual consumption"}),"\n",(0,i.jsx)(n.li,{children:"Updates request counts"}),"\n",(0,i.jsx)(n.li,{children:"Adds rate limit headers to the response"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"token-replenishment",children:"Token Replenishment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Tokens are replenished automatically based on the ",(0,i.jsx)(n.code,{children:"tokens_per_minute"})," rate"]}),"\n",(0,i.jsx)(n.li,{children:"Replenishment occurs when checking the bucket state"}),"\n",(0,i.jsxs)(n.li,{children:["Maximum tokens cannot exceed the ",(0,i.jsx)(n.code,{children:"bucket_size"})]}),"\n",(0,i.jsx)(n.li,{children:"Request counts reset every minute"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"response-headers",children:"Response Headers"}),"\n",(0,i.jsx)(n.p,{children:"The plugin adds the following headers to track usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"X-Ratelimit-Limit-Tokens: [maximum tokens]\nX-Ratelimit-Remaining-Tokens: [tokens remaining]\nX-Ratelimit-Reset-Tokens: [seconds until next refill]\nX-Ratelimit-Limit-Requests: [maximum requests per minute]\nX-Ratelimit-Remaining-Requests: [requests remaining]\nX-Ratelimit-Reset-Requests: [seconds until request count reset]\nX-Tokens-Consumed: [tokens used in this request]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rate-limit-response",children:"Rate Limit Response"}),"\n",(0,i.jsx)(n.p,{children:"When limits are exceeded, the plugin returns a 429 status code with details:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "error": "Rate limit exceeded. Not enough tokens available. Required: 1000, Current: 500",\n  "retry_after": "30s"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"streaming-support",children:"Streaming Support"}),"\n",(0,i.jsx)(n.p,{children:"The plugin provides special handling for streaming requests:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tokens are reserved and deducted immediately at request time"}),"\n",(0,i.jsx)(n.li,{children:"Token usage is tracked throughout the stream"}),"\n",(0,i.jsx)(n.li,{children:"Final token consumption is calculated from the accumulated usage"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,i.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uses Redis for persistent storage"}),"\n",(0,i.jsxs)(n.li,{children:["Bucket state includes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Current token count"}),"\n",(0,i.jsx)(n.li,{children:"Remaining requests"}),"\n",(0,i.jsx)(n.li,{children:"Last refill timestamp"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"24-hour TTL on bucket data"}),"\n",(0,i.jsx)(n.li,{children:"Thread-safe operations with mutex locks"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"key-format",children:"Key Format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"token_bucket:{plugin_id}:{api_key}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Token Configuration"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"tokens_per_request"})," based on average request size"]}),"\n",(0,i.jsxs)(n.li,{children:["Configure ",(0,i.jsx)(n.code,{children:"bucket_size"})," to handle burst traffic"]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust ",(0,i.jsx)(n.code,{children:"tokens_per_minute"})," based on subscription tiers"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Request Limits"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"requests_per_minute"})," to prevent rapid small requests"]}),"\n",(0,i.jsx)(n.li,{children:"Consider both token and request limits for complete protection"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Track token consumption patterns using response headers"}),"\n",(0,i.jsx)(n.li,{children:"Monitor rate limit responses for capacity planning"}),"\n",(0,i.jsx)(n.li,{children:"Implement exponential backoff in clients"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id} \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "required_plugins": [\n      {\n        "name": "token_rate_limiter",\n        "enabled": true,\n        "settings": {\n          "tokens_per_request": 1000,\n          "tokens_per_minute": 10000,\n          "bucket_size": 50000,\n          "requests_per_minute": 60\n        }\n      }\n    ]\n  }\'\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);