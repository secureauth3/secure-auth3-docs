---
sidebar_position: 1
id: intro
description: 5 minutes to learn the most important Secure Auth3 concepts.

title: 👋 Introduction
---


*Secure Auth3 providers Effortless onboarding for your dApp. Simplified password-less authentication platform combined with Ethereum-compatible blockchains.*

## Why is Secure Auth3 Needed?
The use of decentralized applications is multiplying, and Ethereum is at the forefront of this trend. As more and more users use Ethereum wallets to interact with decentralized applications, developers need a way to authenticate those users without requiring them to enter a username and password. Secure Auth3 provides a solution by allowing developers to authenticate users with their Ethereum wallets.

## How can I use Secure Auth3?
Several SDKs are available for integrating Ethereum authentication into your application, and the choice of SDK will depend on your specific needs. The SDKs are EVM-compatible and can work with any Ethereum-compatible blockchain.

Suppose you prefer to use something other than an SDK. In that case, APIs are also available for wallet authentication to create custom solutions for your authentication needs.

Consider these factors when choosing between an SDK and an API:

**SDK**
- An SDK can simplify the authentication process and make integrating Ethereum authentication into your application easier.
- SDKs can be written in various programming languages, making them accessible to many developers.
  
**API**
- An API provides more flexibility and control over the authentication process to create custom solutions that fit your needs and requirements.
- APIs can be integrated into any programming language or framework, making them more versatile.

Consider your specific needs and requirements when choosing between an SDK and an API. Our SDK may be better if you need a quick out-of-the-box feature with minimum code. Our API may be better if you require more flexibility and control over the authentication process.


### Packages
| Package name                                         | Description |
| -----------                                          | ----------- |
| [@secure-auth3-core-auth-sdk](https://github.com/secureauth3)                            | The core SDK is a TypeScript library that enables developers to authenticate users with Ethereum wallets. The SDK wraps Secuare Auth3 API, making it easy for developers to integrate Ethereum authentication into their applications.        |
| [@secure-auth3-react-ui-sdk](https://github.com/secureauth3)       | The React UI kit offers a quick way to build out Ethereum authentication flows in your React application. The UI kit can provide pre-built components and templates for creating authentication flows, allowing you to quickly and easily add Ethereum authentication to your application without designing everything from scratch.       |


### API
| API name      | Description |
| ----------- | ----------- |
| Secure Auth3 Auth API      | Interact with our multichain API to build the most customizable authentication flow. Support EOA and Smart Contract Account signature verification. [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361): Sign-In with Ethereum compliant and [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271): Signature Validation for smart contracts compliant.      |


## What is Secure Auth3
Secure Auth3 is a multichain web3 authentication platform that allows dApp to quickly onboard its users.

With Secure Auth3 API, dApp can assign multiple permission model combinations(PMC) when they create users. This allows dApp to create business logic for grouping their uses in different groups based on their permissions. Features include:

1. **User permission**: Build in a user permission model that allows dApp to assign different combinations of permissions to their users:
   - (type 1) - has permission (1)
   - (type 2) - has permission (2)
   - (type 1 and type 2) - has permission (3)
   - (type 3) - has permission (4)
   - (type 1 and type 3) -has permission (5)
   - (type 2 and type 3) - has permission (6)
   - (type 1, type 2, and type 3) - has permission (7)

2. **Pay as you go**: Track your dApps Monthly Active User and only pay for active users.
3. **User preferences**: This includes any user preferences or settings that the user has set within the DApp. DApps may want to access this information to personalize the user's experience within the DApp.
4. **Transaction history**: This includes a record of all the transactions the user has made within the DApp. DApps may want to access this information to show the user their transaction history within the DApp.
5. **User activity history**: Keep track of the user's activity history, such as the pages they have visited, the content they have interacted with, monthly logins, and the actions they have taken on the your dapp.
6. **User device information**: The service can store information about the user's device, such as the device type, operating system, and browser.

## Use cases:
Secure Auth3 can be used in a variety of use cases; here are some examples:

1. **Online marketplaces**: Online marketplaces can use Secure Auth3 to authenticate users and streamline the onboarding process. Users can sign up for the marketplace using their Ethereum wallets. Secure Auth3 can assign them different permission levels based on their transaction history and other user activity data. The dApp can use the user's transaction history to provide personalized recommendations and improve the user experience. 
   
2. **Gaming applications**: Secure Auth3 can be used in gaming applications to authenticate users and manage user permissions. For example, a gaming platform could use Secure Auth3 to verify that users have the correct permissions to access certain features or levels within the game.

3. **Social media platforms**: Social media platforms can use Secure Auth3 to authenticate users and personalize the user experience. For example, a platform could use Secure Auth3 to track a user's activity history and preferences to deliver personalized content and advertisements.
   
4. **Content subscription services**: Secure Auth3 can be used in content subscription services to manage user permissions and track user activity. For example, a video streaming service could use Secure Auth3 to assign different permission levels to users based on their subscription status and track their viewing history.
   
5. **Enterprise applications**: Secure Auth3 can be used in enterprise applications to enhance security and streamline the onboarding process. Employees can use their Ethereum wallets to authenticate themselves and gain access to company resources.

Overall, Secure Auth3 can be used in any application that requires secure authentication and permission management. The flexibility and scalability of the platform make it appropriate for a wide range of use cases.


## Contact us
1. Chat with us on Discord
2. Open an issue of Secure Auth3 Github
3. Tweet us on Twitter

