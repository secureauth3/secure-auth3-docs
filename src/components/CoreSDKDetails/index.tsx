import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CoreSDKDetails(): JSX.Element {
  return (
    
    <section className={clsx('hero hero--primary', sharedStyles.section)}>
        <div className="container">
          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col col-6">
              <h2>Our Core-Auth SDK</h2>
              <p>Our Core-Auth SDK allows dApps to create custom wallet authentication flows to manage Web3 onboarding across all Ethereum-compatible blockchains.</p>
                <ul>
                <li>Supports EOA and Smart Contract Account</li>
                <li>EIP-4361: Sign-In with Ethereum compliant </li>
                <li>EIP-1271: Signature Validation for smart contracts compliant</li>
                <li>Blockchain agnostic</li>
                <li>Web3 user identity role base management</li>
              </ul>
            </div>
            <div className="col col-6">
              <ThemedImage
                className={styles.codeSvg}
                alt="Example of using Auth3 sdk"
                sources={{
                  light: useBaseUrl('/img/console-light.svg'),
                  dark: useBaseUrl('/img/console-dark.svg'),
                }}
              />
            </div>
          </div>
        </div>
    </section>
  );
}
