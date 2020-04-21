import React from 'react';
import userManager from '../Utils/UserManager'
import { Route, Redirect} from 'react-router';
import { connect } from 'react-redux';

function PublicRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={ props =>
          props.user !== null ? (
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
      console.log(state.oidc.user);
    return {
      user: state.oidc.user
    };
  }

export default connect(mapStateToProps, null)(PublicRoute)