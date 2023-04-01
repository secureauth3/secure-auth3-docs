import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';

export default function AboutpageHero(): JSX.Element {
  return (
    <section className={sharedStyles.section}>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className={styles.quote}>The freedom to choose and challenge the status quo is essential for a life of adventure and purpose. When individuals dare to step outside their comfort zones and take risks, they can discover new opportunities for growth and transformation.</h2>
        </div>
      </div>
    </div>
  </section>
  );
}
