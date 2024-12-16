import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tools to run robust LLM applications',
    description: (
      <>
        Identify and debug functional issues in real time, prevent malfunctions and hallucinations, 
        and protect your service from critical attack paths.
      </>
    ),
  },
  {
    title: 'Insights to lead conversational services',
    description: (
      <>
        Learn how people use your chatbots, analyze conversation evolution, 
        and define custom metrics for sentiment scoring and communication style.
      </>
    ),
  },
  {
    title: 'Protection for your AI and company',
    description: (
      <>
        Real-time security against malicious prompts, comprehensive monitoring suite, 
        and complete audit trail for all AI conversations.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
