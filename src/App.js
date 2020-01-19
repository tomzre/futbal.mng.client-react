// import { makeAuthenticator, makeUserManager, Callback } from 'react-oidc'
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider, oidcLog } from '@axa-fr/react-oidc-context';
import Header from './Layout/Header';
import Routes from './Router';
import oidcConfiguration from './configuration';

// create a user manager instance
// const oidcConfiguration = {
//   client_id: 'spa',
//   redirect_uri: `http://localhost:3000/callback`,
//   response_type: 'id_token code',
//   scope: 'openid profile api1',
//   authority: 'http://localhost:5000',
//   post_logout_redirect_uri: `http://localhost:5002/login`,
//   silent_redirect_uri: `http://localhost:5002/silent_renew.html`,
//   automaticSilentRenew: true,
//   filterProtocolClaims: true,
//   loadUserInfo: true,
//   //userStore: new WebStorageStateStore(settings)
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (<div>
    <Router>
      <AuthenticationProvider 
        configuration={oidcConfiguration} 
        loggerLevel={oidcLog.DEBUG}
        isEnabled={true}>
        <Header />
        <Routes />
      </AuthenticationProvider>
    </Router>
  </div>
  )};

render(<App />, document.getElementById('root'));

export default App;

