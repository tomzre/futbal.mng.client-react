import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Router';
import { OidcProvider } from 'redux-oidc';
import userManager from './Utils/UserManager'
import store from './store'

const App = () => {
  return (<div>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        {/*  */}
        <Routes />
      </OidcProvider>
    </Provider>
  </div>
  )
};

render(<App />, document.getElementById('root'));

export default App;

