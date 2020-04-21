import React from 'react';
import userManager from '../Utils/UserManager'
import { Route, Redirect} from 'react-router';
import { connect } from 'react-redux';

function PublicRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={ props =>
          rest.user === null ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  function mapStateToProps(state) {
    const user = state.oidc.user;
    return {
      user
    };
  }

export default connect(mapStateToProps, null)(PublicRoute);