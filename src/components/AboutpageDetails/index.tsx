import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';

export default function AboutpageDetails(): JSX.Element {
  return (
    <section className={sharedStyles.section}>
        <div className="container">
          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col col-6">
              <h2>Our driving force</h2>
              <p>At Secure Auth3, we believe in empowering people with the freedom of choice and challenging the status quo. We achieve this by creating easy-to-use and builder-friendly products that enable more people to participate in the decentralized world of Web3. Additionally, we prioritize security in all our products to ensure a safe and trustworthy user experience.</p>
              <p>Join us in building a more accessible, decentralized, and secure future for all!</p>
            </div>
            <div className="col col-6">
              <img src={require('@site/static/img/mission.jpg').default} alt="Group of people holding blocks" />
            </div>
          </div>
          
        </div>
    </section>
  );
}
