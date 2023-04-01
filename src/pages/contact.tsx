import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Contact(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Contact Us`}
      description={`The freedom to choose and challenge the status quo is essential for a life of adventure and purpose. When individuals dare to step outside their comfort zones and take risks, they can discover new opportunities for growth and transformation.`}>
      <Head>
        <meta name="keywords" content="password-less, auth"/>
        <meta property="og:image" content="https://cdn.errandboys.co/images/Original.png" />
        <meta name="twitter:title" content={`Contact Us`}/>
        <meta name="twitter:description" content={`${siteConfig.tagline}`}/>
      </Head>
      <main>
      </main>
    </Layout>
  );
}
