import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { DocSearch } from '@docsearch/react';

const cards = [
  {
    title: ['Trust', 'Gate'],
    description: 'Secure and monitor your AI model interactions through our enterprise-grade gateway',
    link: '/category/ai-gateway',
    links: [
      { title: 'Gateway Overview', url: '/category/trust-gate' },
      { title: 'Key Concepts', url: '/category/key-concepts' },
      { title: 'Step-by-Step Guide', url: '/category/step-by-step-guide' },
    ]
  },
  {
    title: ['Red', 'Teaming'],
    description: 'Test and evaluate your AI systems for security vulnerabilities',
    link: '/category/red-teaming',
    links: [
      { title: 'Red Teaming Overview', url: '/category/red-teaming' },
      { title: 'Key Concepts', url: '/category/key-concepts-1' },
      { title: 'Step-by-Step Guide', url: '/category/step-by-step-guide-1' },
    ]
  },
  {
    title: ['LLM', 'Observability'],
    description: 'Monitor, track, and analyze your AI system\'s behavior and performance in real-time',
    link: '/category/observability',
    links: [
      { title: 'Observability Overview', url: '/category/llm-observability' },
      { title: 'Key Concepts', url: '/category/key-concepts-2' },
      { title: 'Step-by-Step Guide', url: '/category/step-by-step-guide-2' },
    ]
  }
];

function HomepageHeader() {
  return (
    <header className="relative bg-[#020817]">
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#A855F7]/15 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
        {/* Hero Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[1400px] mx-auto">
            <img
              src="./img/Globe.svg" 
              alt="Neural Network Globe"
              className="w-full h-[400px] object-contain opacity-90"
            />
          </div>
        </div>

        {/* Title Overlay with gradient background for better readability */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center space-y-6 relative z-10">
            <h1 className="text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Documentation
            </h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="search-container rounded-lg p-1.5 ring-1 ring-white/10">
              <DocSearch 
                appId="HW1BIJOXAK"
                apiKey="3d6824f8974966996459cc83fcabc8c7"
                indexName="neuraltrustio"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProductCard({ title, description, links }) {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold mb-3">
        <span className="text-[#020817] dark:text-white">{title[0]}</span>
        <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">{title[1]}</span>
      </h3>
      <p className="text-[#334155] dark:text-[#E2E8F0] mb-6">{description}</p>
      <ul className="space-y-3 list-disc pl-5 marker:text-[#6366F1]">
        {links.map((link, idx) => (
          <li key={idx} className="leading-[1.5rem]">
            <Link
              to={link.url}
              className="text-[#6366F1] hover:text-[#818CF8] dark:text-[#818CF8] dark:hover:text-[#A5B4FC] text-sm flex items-center group transition-colors"
            >
              <svg 
                className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" 
                viewBox="0 0 16 16" 
                fill="currentColor"
              >
                <path d="M5 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5z"/>
                <path d="M7 4h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1zm0 3h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1zm0 3h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1z"/>
              </svg>
              <span className="flex-1">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <ProductCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="NeuralTrust documentation - Secure and monitor your AI systems">
      <div className="min-h-screen bg-gray-50">
        <HomepageHeader />
        <main>
          <MainContent />
        </main>
      </div>
    </Layout>
  );
}