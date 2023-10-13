import React from 'react'

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
        <form>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
            <button type="submit">Sign up</button>
        </form>
    </>
  )
}

export default Login