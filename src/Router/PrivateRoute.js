import React from 'react';
import userManager from '../Utils/UserManager'
import { Route, Redirect} from 'react-router';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={ props =>
          props.user !== null ? (
            children
          ) : (
            props.push("/")
            // <Redirect
            //   to={{
            //     pathname: "/signin",
            //     state: { from: props.location }
            //   }}
            // />
          )
        }
      />
    );
  }

  function mapStateToProps(state) {
      const user = state.oidc.user;
      console.log(user);
    return {
      user
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      push
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)