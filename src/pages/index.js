import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'; // Link to the CSS styles
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DocSearch } from '@docsearch/react';



export default function Home() {
  return (
    <Layout>
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.title}>NeuralTrust Documentation</h1>
          {/* <p className={styles.subtitle}>
            <span className={styles.version}>Community v2.8.0</span> | <span className={styles.version}>Enterprise v2.8.0</span>
          </p> */}
          <div className={styles.searchContainer}>
            <DocSearch 
              appId="HW1BIJOXAK"
              apiKey="3d6824f8974966996459cc83fcabc8c7"
              indexName="neuraltrustio"
            />
          </div>
          <section className={styles.topics}>
            <h2 className={styles.topicsHeading}>Explore all topics</h2>
            <div className={styles.cards}>
              {[
                { 
                  title: 'Getting Started',
                  description: 'Learn the basics and get up and running with NeuralTrust quickly',
                  icon: <img src={useBaseUrl('/img/rocket-icon.svg')} alt="sd" width="100" height="100" />,
                  link: '/neuraltrust/category/getting-started',
                },
                { 
                  title: 'AI Gateway',
                  description: 'Secure and monitor your AI model interactions through our gateway',
                  icon: <img src={useBaseUrl('/img/ai-gateway.svg')} alt="ai gateway" width="100" height="100" />,
                  link: '/neuraltrust/category/ai-gateway'
                },
                { 
                  title: 'Observability',
                  description: 'Monitor, track, and analyze your AI system\'s b ehavior and performance',
                  icon: <img src={useBaseUrl('/img/observability.svg')} alt="observability" width="100" height="100" />,
                  link: '/neuraltrust/category/observability'
                },
                { 
                  title: 'Red Teaming',
                  description: 'Test and evaluate your AI systems for security vulnerabilities',
                  icon: <img src={useBaseUrl('/img/red-teaming.svg')} alt="red teaming" width="100" height="100" />,
                  link: '/neuraltrust/category/red-teaming'
                },
                { 
                  title: 'SDKs',
                  description: 'Integrate NeuralTrust into your applications with our software development kits',
                  icon: <img src={useBaseUrl('/img/sdk.svg')} alt="sdk" width="100" height="100" />,
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
                  className={styles.card}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={styles.cardIcon}>{topic.icon}</div>
                  <h3>{topic.title}</h3>
                  <p className={styles.cardDescription}>{topic.description}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </header>
      <main>
      </main>
    </Layout>
  );
}