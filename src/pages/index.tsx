import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import CoreSDKDetails from '@site/src/components/CoreSDKDetails/index';
import UISDKDetails from '@site/src/components/UISDKDetails/index';
import AboutpageCulture from '@site/src/components/AboutpageCulture/index';
import AboutpageDetails from '@site/src/components/AboutpageDetails/index';
import AboutpageHero from '@site/src/components/AboutpageHero/index';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Empower your Web3 security today</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://ckmlrngbbeq.typeform.com/to/EXYnNt67">
            Sign up for our waiting list ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <Head>
        <meta name="keywords" content="password-less, auth"/>
        <meta property="og:image" content="https://cdn.errandboys.co/images/Original.png" />
        <meta name="twitter:title" content={`${siteConfig.title}`}/>
        <meta name="twitter:description" content={`${siteConfig.tagline}`}/>
      </Head>
      <main>
        <HomepageHeader />
        <AboutpageHero />
        <AboutpageDetails />
        <AboutpageCulture />
        <CoreSDKDetails />
        <UISDKDetails />
      </main>
    </Layout>
  );
}
