import * as React from 'react';
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from '../../Utils/UserManager'
import { connect } from 'react-redux';

class CustomCallback extends React.Component
{

  render(){
    return (
      <CallbackComponent
      userManager={userManager}
      successCallback={() => this.props.dispatch(push("/"))}
      errorCallback={error => {
        this.props.dispatch(push("/"));
        console.error(error);
      }}
      >
      <div>Redirecting...</div>
    </CallbackComponent>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCallback);