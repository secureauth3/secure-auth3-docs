import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';

type CultureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const CultureList: CultureItem[] = [
  {
    title: 'Build with security at the foundation',
    Svg: require('@site/static/img/laptop-code.svg').default,
    description: (
      <>
        Approach security with rigor and a commitment to first principles, 
        ensuring that our products are designed with safety at their core.
        We constantly evaluate and improve our security practices, building 
        on a foundation of proven principles to create reliable, trustworthy, 
        and secure products.
      </>
    ),
  },
  {
    title: 'Explore unconventional solutions',
    Svg: require('@site/static/img/artificial-intelligence.svg').default,
    description: (
      <>
        Real innovation changes the course of industries or even society; we 
        constantly experiment with new ideas and technologies and think outside the box to push the boundaries of what's possible with decentralized applications.
      </>
    ),
  },
  {
    title: `Protect users who can't protect themselves`,
    Svg: require('@site/static/img/cha-bubble.svg').default,
    description: (
      <>
        We prioritize the protection and empowerment of users, using secure technology, constantly seeking user feedback, and prioritizing user experience to ensure that they can participate in the Web3 ecosystem safely and confidently.
      </>
    ),
  },
  
];

function Culture({title, Svg, description}: CultureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.cultureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function AboutpageCulture(): JSX.Element {
  return (
    <section className={sharedStyles.section}>
      <div className="container">
        <h2 className="text--center">Our way of doing things</h2>
        <div className="row">
          {CultureList.map((props, idx) => (
            <Culture key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
