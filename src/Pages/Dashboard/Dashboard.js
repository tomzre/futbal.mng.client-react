import React from 'react';
import userManager from '../../Utils/UserManager'
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const { user } = props;
  }
  
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Protected Dashboard</p>
        <p>
          <span>
            Hello World
                </span>
        </p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

export default connect(mapStateToProps, null)(Dashboard);