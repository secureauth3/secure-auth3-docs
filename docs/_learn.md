---
sidebar_position: 2
id: learn
description: 5 minutes to learn the most important Secure Auth3 concepts.

title: 📚 Learn
---

5 minutes to learn the most important Secure Auth3 concepts.

```typescript
import { Auth3 } from '@secure-auth3-core-auth-sdk'

const auth3Client = new Auth3({
	clientId: '<client-id>',
  	rpcProjectId: '<your-infura-project-key>',
    logoinSuccessUrl: 'https://app.mysite.io/dashboard',
    logoutUrl:'https://app.mysite.io/login'
})

// freedom of choice - (EOA or Smart Contract Account)
const loginWithEOA = async () => {
    const authData = await auth3Client.loginWithEOA()
}

const loginWithSC = async () => {
    const authData = await auth3Client.loginWithSC()
}

const logout = async () => {
    await auth3Client.logout()
}
```

```typescript
import React, { useCallback } from "react"
import { Auth3Slider, Auth3 } from '@secure-auth3-ui-sdk'

const auth3Client = new Auth3({
	clientId: '<client-id>',
  	rpcProjectId: '<your-infura-project-key>',
    logoinSuccessUrl: 'https://app.mysite.io/dashboard',
    logoutUrl:'https://app.mysite.io/login'
})

export default function App() {

    const mySignInCallback = useCallback(async (authData) => {
        if (authData.verified) {
            authData.redirectSuccessUrl()
        } else {
            authData.redirectLogoutUrl()
        }
    }, [])

    const myLogoutCallback = useCallback(async (authData) => {
        authData.redirectLogoutUrl()
    }, [])

    return (
        <nav className="navbar">
            <Auth3Slider
              auth3ClientIntance={auth3Client}
              signInCallback={mySignInCallback}
              logoutCallback={myLogoutCallback}
            />
       </nav>
    )
}
```