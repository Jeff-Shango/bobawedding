import React, { useRef } from 'react'

const Login = () => {
    const loginForm = useRef();

  return (
    <>
    <div className="loginHeader">
        <h1 className="loginTitle">Login with your Sign-In Information</h1>
        <h3 className="loginTitleDescript">If you need help with signing in, contact the wedding planner for details</h3>
    </div>

    <div className="loginBody">
        <form ref={loginForm} method="post" id="loginForm"></form>
    </div>
    </>
  )
}

export default Login