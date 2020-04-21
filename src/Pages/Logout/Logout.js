import React from 'react';

class Logout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.logMeOut();
    }
    async logMeOut() {
        var query = window.location.search;
        var logoutIdQuery = query && query.toLowerCase().indexOf('?logoutid=') == 0 && query;

        const response = await fetch('http://localhost:5000/api/authenticate/logout' + logoutIdQuery, {
          credentials: 'include'
        });

        const data = await response.json();

        if (data.signOutIFrameUrl) {
          var iframe = document.createElement('iframe');
          iframe.width = 0;
          iframe.height = 0;
          iframe.class = 'signout';
          iframe.src = data.signOutIFrameUrl;
          document.getElementById('logout_iframe').appendChild(iframe);
        }

        if (data.postLogoutRedirectUri) {
          window.location = data.postLogoutRedirectUri;
        } else {
          document.getElementById('bye').innerText = 'You can close this window. Bye!';
        }
      }

    render(){
        return(
            <div id="logout_iframe">
                logout!
                <div id="bye"></div>
            </div>
        );
    }
}

export default Logout;