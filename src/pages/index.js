import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DocSearch } from '@docsearch/react';

export default function Home() {
  return (
    <Layout>
      <header className="py-8 px-4">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Documentation</h1>
          <div className="max-w-lg mx-auto mb-8">
            <div className="search-container">
              <DocSearch 
                appId="HW1BIJOXAK"
                apiKey="3d6824f8974966996459cc83fcabc8c7"
                indexName="neuraltrustio"
              />
            </div>
          </div>
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">Explore all topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { 
                  title: 'Getting Started',
                  description: 'Learn the basics and get up and running with NeuralTrust quickly',
                  icon: <img className="w-8 h-8" src={useBaseUrl('/img/rocket-icon.svg')} alt="Getting Started" />,
                  link: '/neuraltrust/category/getting-started',
                },
                { 
                  title: 'AI Gateway',
                  description: 'Secure and monitor your AI model interactions through our gateway',
                  icon: <img className="w-8 h-8" src={useBaseUrl('/img/ai-gateway.svg')} alt="AI Gateway" />,
                  link: '/neuraltrust/category/ai-gateway'
                },
                { 
                  title: 'Observability',
                  description: 'Monitor, track, and analyze your AI system\'s behavior and performance',
                  icon: <img className="w-8 h-8" src={useBaseUrl('/img/observability.svg')} alt="Observability" />,
                  link: '/neuraltrust/category/observability'
                },
                { 
                  title: 'Red Teaming',
                  description: 'Test and evaluate your AI systems for security vulnerabilities',
                  icon: <img className="w-8 h-8" src={useBaseUrl('/img/red-teaming.svg')} alt="Red Teaming" />,
                  link: '/neuraltrust/category/red-teaming'
                },
                { 
                  title: 'SDKs',
                  description: 'Integrate NeuralTrust into your applications with our software development kits',
                  icon: <img className="w-8 h-8" src={useBaseUrl('/img/sdk.svg')} alt="SDKs" />,
                  link: '/neuraltrust/category/sdks'
                },
                { 
                  title: 'Development',
                  description: 'Resources and guides for developers implementing NeuralTrust',
                  icon: <span className="text-2xl">🛠️</span>,
                  link: '/neuraltrust/category/development'
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group relative flex flex-col items-start p-4 bg-white border border-solid border-[#eaeaea] hover:border-transparent rounded-lg transition-all duration-300 cursor-pointer no-underline hover:no-underline overflow-hidden hover:translate-y-[-1px] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-black before:to-[#333] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  <div className="flex flex-col items-start">
                    <div className="flex justify-center items-center w-10 h-10 mb-3 rounded-lg bg-[#f5f5f5] transition-all duration-300 group-hover:bg-[#eaeaea] group-hover:scale-110 group-hover:rotate-[-5deg]">
                      {item.icon}
                    </div>
                    <h2 className="text-base font-semibold mb-1.5 text-black tracking-[-0.01em]">{item.title}</h2>
                    <p className="text-xs leading-[1.4] text-[#666666] m-0">{item.description}</p>
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