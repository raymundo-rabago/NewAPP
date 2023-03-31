import React, { Fragment, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { AuthContextProvider, useAuthState } from './firebase';

import Home from './components/Home';

// https://github.com/codingwithjustin/firebase-v9-auth-react
// https://dev.to/jsbroks/firebase-authentication-with-react-and-guarded-routes-41nm

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

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
          <Link to="/signup">SignUp</Link>
        </div>
        <AuthenticatedRoute exact path="/" component={Home} />
        <UnauthenticatedRoute exact path="/signup" component={SignUp} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
      </Router>
    </AuthContextProvider>
  )
}

export default App;

/*
  const App = () => {
    const lenses = fetchData('https://sheet.best/api/sheets/c2af4951-3c2d-4cd1-a4da-cc630463207d');
    return (
      <Fragment>
        <div className="soluxe-grid">
          {lenses.map((data) => (
            <div className="soluxe-item" key={data.id}>
              <img src={`https://res.cloudinary.com/dradvgtkq/image/upload/c_thumb,w_120,g_face/v1677686608/eyewear/${data.img}`} alt={data.producto} className="w-100" />
              <span>{data.costo}</span>
            </div>
          ))}
        </div>
      </Fragment>
    );
  };
  export default App;
  */