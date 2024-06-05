import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tech-Articles',
    Svg: require('@site/static/img/news.svg').default,
    description: (
      <>    
        Tech-Articles is a resource developed for the BD/INN team
        publish articles about technologies and projects that are working 
        and can contribute to the development community.
      </>
    ),
  },
  {
    title: 'Tech-Radar',
    Svg: require('@site/static/img/radar.svg').default,
    description: (
      <>
        Tech Radar is a tool for the BD/INN team to document internal and external technologies, 
        creating a visual representation of how they will impact the company. 
        This information will be available to all Bosch employees.
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
