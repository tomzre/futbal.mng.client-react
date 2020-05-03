import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component
{
constructor(props)
{
  super(props);
  const { user } = props;
}

  render() {
    return ( 
      <div>
      <h1>Home</h1>
      <p>Unprotected home page</p>
      <p>
        <Link to='/signin'>
          Login
          </Link>
      </p>
      <p>
      <Link to='/dashboard'>
          Dashboard
          </Link>
      </p>
      <p>
        
      </p>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);