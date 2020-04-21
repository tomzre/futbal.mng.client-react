import React from 'react';
import userManager from '../../Utils/UserManager'

class Dashboard extends React.Component {
  
    logout(){
        userManager.signoutRedirect();
    }

    render(){
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
  

export default Dashboard;