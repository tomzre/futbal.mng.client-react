import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Layout/Header';
import Routes from './Router';
import { OidcProvider } from 'redux-oidc';
import userManager from './Utils/UserManager'
import store from './store'
import oidcConfiguration from './configuration';
import Callback from './Pages/Callback'

const App = () => {
  return (<div>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        {/* <Header /> */}
        <Routes />
      </OidcProvider>
    </Provider>
  </div>
  )
};

render(<App />, document.getElementById('root'));

export default App;

