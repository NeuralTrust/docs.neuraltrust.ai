import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DocSearch } from '@docsearch/react';

export default function Home() {
  return (
    <Layout>
      <header className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Documentation</h1>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="search-container">
              <DocSearch 
                appId="HW1BIJOXAK"
                apiKey="3d6824f8974966996459cc83fcabc8c7"
                indexName="neuraltrustio"
              />
            </div>
          </div>
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Explore all topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Getting Started',
                  description: 'Learn the basics and get up and running with NeuralTrust quickly',
                  icon: <img src={useBaseUrl('/img/rocket-icon.svg')} alt="Getting Started" />,
                  link: '/neuraltrust/category/getting-started',
                },
                { 
                  title: 'AI Gateway',
                  description: 'Secure and monitor your AI model interactions through our gateway',
                  icon: <img src={useBaseUrl('/img/ai-gateway.svg')} alt="AI Gateway" />,
                  link: '/neuraltrust/category/ai-gateway'
                },
                { 
                  title: 'Observability',
                  description: 'Monitor, track, and analyze your AI system\'s behavior and performance',
                  icon: <img src={useBaseUrl('/img/observability.svg')} alt="Observability" />,
                  link: '/neuraltrust/category/observability'
                },
                { 
                  title: 'Red Teaming',
                  description: 'Test and evaluate your AI systems for security vulnerabilities',
                  icon: <img src={useBaseUrl('/img/red-teaming.svg')} alt="Red Teaming" />,
                  link: '/neuraltrust/category/red-teaming'
                },
                { 
                  title: 'SDKs',
                  description: 'Integrate NeuralTrust into your applications with our software development kits',
                  icon: <img src={useBaseUrl('/img/sdk.svg')} alt="SDKs" />,
                  link: '/neuraltrust/category/sdks'
                },
                { 
                  title: 'Development',
                  description: 'Resources and guides for developers implementing NeuralTrust',
                  icon: '🛠️',
                  link: '/neuraltrust/category/development'
                },
              ].map((topic, idx) => (
                <a 
                  key={idx} 
                  href={topic.link} 
                  className="group relative flex flex-col items-start p-8 bg-white border border-solid border-[#eaeaea] hover:border-transparent rounded-[24px] transition-all duration-300 cursor-pointer no-underline hover:no-underline overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[6px] before:bg-gradient-to-r before:from-black before:to-[#333] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  <div className="flex flex-col items-start">
                    <div className="flex justify-center items-center w-16 h-16 mb-6 rounded-2xl bg-[#f5f5f5] transition-all duration-300 group-hover:bg-[#eaeaea] group-hover:scale-110 group-hover:rotate-[-5deg]">
                      {typeof topic.icon === 'string' ? (
                        <span className="text-2xl">{topic.icon}</span>
                      ) : (
                        <div className="w-8 h-8">{topic.icon}</div>
                      )}
                    </div>
                    <h3 className="text-[1.5rem] font-bold mb-4 text-black tracking-[-0.02em]">{topic.title}</h3>
                    <p className="text-base leading-[1.6] text-[#666666] m-0">{topic.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </header>
    </Layout>
  );
}