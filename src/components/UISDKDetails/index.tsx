import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function UISDKDetails(): JSX.Element {
  return (
    
    <section className={clsx('hero hero--secondary', sharedStyles.section)}>
        <div className="container">
          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
          <div className="col col-6">
              <ThemedImage
                className={styles.codeGif}
                alt="Example of using Auth3 sdk"
                sources={{
                  light: useBaseUrl('/img/landing-page-dapp.gif'),
                  dark: useBaseUrl('/img/landing-page-dapp.gif'),
                }}
              />
            </div>
            <div className="col col-6">
              <h2>Our UI-Auth SDK</h2>
              <p>Are you looking to get started quickly? Try our UI-Auth SDK to inject full end-to-end wallet authentication with a few lines of code.</p>
                <ul>
                <li>Bootstrap your dApps onboarding in minutes.</li>
                <li>Supports EOA and Smart Contract Account</li>
                <li>EIP-4361: Sign-In with Ethereum compliant </li>
                <li>EIP-1271: Signature Validation for smart contracts compliant</li>
                <li>Blockchain agnostic</li>
                <li>Change network dectection</li>
                <li>Access to RPC provider for dApps that need to make any additional transactions</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
}
