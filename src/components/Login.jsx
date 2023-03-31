import { useCallback } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import useAuthState from '../firebase';

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}


const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}



export const Login = () => {
  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    } catch (e) {
      alert(e.message)
    }
  }, [])

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="email" type="email" />
        <input name="password" placeholder="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}