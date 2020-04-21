import React from 'react';
import userManager from '../../Utils/UserManager'
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const { user } = props;
  }

  logout = () =>  {
    const user = this.props.user;
    if (user !== null) userManager.signoutRedirect(user.id_token);
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
        <button onClick={this.logout}>logout</button>
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