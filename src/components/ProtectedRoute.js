import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route>
  render={props => isVerifying ? (
    <div/>
  ): isAuthenticated ? (
    <Component {...props}/>
  ): (
    <Redirect to={{
      pathname: '/login',
      state: { from : props.location }
    }}/>
  )
  }
  </Route>
)

export default ProtectedRoute;
