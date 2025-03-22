// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: '⚙️ Deployment',
      collapsed: false,
      items: [
        'deployment/overview',
        'deployment/architecture',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'deployment/kubernetes/kubernetes-installation',
          ],
        },
        {
          type: 'category',
          label: 'Docker',
          items: [
            'deployment/docker/docker-installation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🛡️ TrustGate',
      className: 'sidebar-main-category',
      collapsed: false,
      items: [
        'trustgate/getting-started/trustgate-overview',
        {
          type: 'category',
          label: '🚀 Getting Started',
          collapsed: true,
          items: [
            'trustgate/getting-started/step-by-step/overview',
            'trustgate/getting-started/step-by-step/get-ai-gateway',
            'trustgate/getting-started/step-by-step/first-gateway',
            'trustgate/getting-started/step-by-step/configure-upstream',
            'trustgate/getting-started/step-by-step/add-service',
            'trustgate/getting-started/step-by-step/create-rules',
            'trustgate/getting-started/step-by-step/rate-limiting',
            'trustgate/getting-started/step-by-step/load-balancing',
          ],
        },
        {
          type: 'category',
          label: '💡 Key Concepts',
          collapsed: true,
          items: [
            'trustgate/concepts/gateway',
            'trustgate/concepts/services',
            'trustgate/concepts/upstreams',
            'trustgate/concepts/rules',
            'trustgate/concepts/plugins',
            'trustgate/concepts/consumer-groups',
            'trustgate/concepts/traffic-management',
          ],
        },
        {
          type: 'category',
          label: '📚 Guides',
          collapsed: true,
          items: [
            'trustgate/guides/provider-load-balancing',
            'trustgate/guides/token-rate-limiting',
          ],
        },
        {
          type: 'category',
          label: '🔌 Plugins',
          collapsed: true,
          items: [
            'trustgate/plugins/data-masking',
            'trustgate/plugins/code-sanitation',
            'trustgate/plugins/injection-protection',
            'trustgate/plugins/request-size-limiter',
            'trustgate/plugins/prompt-moderation',
            'trustgate/plugins/rate-limiting',
            'trustgate/plugins/token-rate-limiting',
            'trustgate/plugins/external-api',
            {
              type: 'category',
              label: 'Toxicity Detection',
              collapsed: true,
              items: [
                'trustgate/plugins/toxicity_detection/toxicity-openai-detection',
                'trustgate/plugins/toxicity_detection/toxicity-azure-detection',
              ],
            },
            {
              type: 'category',
              label: 'Prompt Guard',
              collapsed: true,
              items: [
                'trustgate/plugins/prompt-guard/bedrock-guardrail',
              ],
            },
          ],
        },
        'trustgate/benchmark',
        'trustgate/monitoring',
      ],
    },
    {
      type: 'category',
      label: '🧪 TrustTest',
      className: 'sidebar-main-category',
      collapsed: false,
      items: [
        'trusttest/getting-started/overview',
        {
          type: 'category',
          label: '🚀 Getting Started',
          collapsed: true,
          items: [
            'trusttest/getting-started/step-by-step/overview',
            'trusttest/getting-started/step-by-step/configure-llm-endpoint',
            'trusttest/getting-started/step-by-step/create-evaluation-set',
            'trusttest/getting-started/step-by-step/run-custom-attack',
            'trusttest/getting-started/step-by-step/run-complience-scan',
          ],
        },
        {
          type: 'category',
          label: '💡 Key Concepts',
          collapsed: true,
          items: [
            'trusttest/key-concepts/overview',
            'trusttest/key-concepts/evaluation-sets',
            'trusttest/key-concepts/testsets',
            'trusttest/key-concepts/knowledge-bases',
            'trusttest/key-concepts/scanner',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🔍 TrustLens',
      className: 'sidebar-main-category',
      collapsed: false,
      items: [
        'trustlens/getting-started/overview',
        {
          type: 'category',
          label: '🚀 Getting Started',
          collapsed: true,
          items: [
            'trustlens/getting-started/step-by-step/overview',
            'trustlens/getting-started/step-by-step/track-llm',
            'trustlens/getting-started/step-by-step/create-topic-classifier',
            'trustlens/getting-started/step-by-step/create-custom-monitor',
          ],
        },
        {
          type: 'category',
          label: '💡 Key Concepts',
          collapsed: true,
          items: [
            'trustlens/key-concepts/analytics',
            'trustlens/key-concepts/tracing',
            'trustlens/key-concepts/monitors',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🛠️ SDKs',
      className: 'sidebar-main-category',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '🐍 Python SDK',
          collapsed: true,
          items: [
            'sdks/python-sdk/installation',
            {
              type: 'category',
              label: '📝 Examples',
              collapsed: true,
              items: [
                'sdks/python-sdk/usage/functional-evaluation-set',
                'sdks/python-sdk/usage/tracing',
                'sdks/python-sdk/usage/scan',
                'sdks/python-sdk/usage/custom-attack',
              ],
            },
            {
              type: 'category',
              label: '📖 API Reference',
              collapsed: true,
              items: [
                'sdks/python-sdk/api-reference/neuraltrust-client',
                'sdks/python-sdk/api-reference/trace-class',
                'sdks/python-sdk/api-reference/scanner-client',
                'sdks/python-sdk/api-reference/testset-client',
                'sdks/python-sdk/api-reference/evaluation-set-client',
                'sdks/python-sdk/api-reference/trace-client',
                'sdks/python-sdk/api-reference/knowledge-base-client',
              ],
            },
          ],
        },
      ],
    }
  ],
};

export default sidebars;
