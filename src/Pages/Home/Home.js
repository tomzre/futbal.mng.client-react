import React from 'react';
import { Link } from 'react-router-dom';
import { compose, withProps } from 'recompose';
// import { withAuthentication } from '@axa-fr/react-oidc-context-fetch';
import Button from '@material-ui/core/Button'
import Oidc from 'oidc-client';
import configuration from '../../configuration';
import userManager from '../../Utils/UserManager'
import { connect } from 'react-redux';
import Header from '../../Layout/Header';




class Home extends React.Component
{
constructor(props)
{
  super(props);
  const { user } = props;
}
  componentDidMount(){
    //userManager.signinRedirect();
    if(!this.props.user || this.props.user.expired)
    {
      //this.props.history.push('/signin')
    }
    console.log(this.props.user);
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
        
      </p>
      <p>
        
      </p>
    </div>);
  }
}



// const enhance401 = compose(
//   withAuthentication(fetchMock(401)),
//   withProps(props => ({
//     handleClick: e => {
//       e.preventDefault();
//       props
//         .fetch('http://www.demo.url')
//         .then(() => alert('fetch end'))
//         .catch(e => alert(e));
//     },
//   })),
// );

// const Button401 = ({ handleClick }) => (
//   <button onClick={handleClick} type="button">
//     Simulate 401
//   </button>
// );

// const Button401Enhance = enhance401(Button401);

// const enhance403 = compose(
//   withAuthentication(fetchMock(403)),
//   withProps(props => ({
//     handleClick: e => {
//       e.preventDefault();
//       props
//         .fetch('http://www.demo.url')
//         .then(() => alert('fetch end'))
//         .catch(e => alert(e));
//     },
//   })),
// );

// const Button403 = ({ handleClick }) => (
//   <button onClick={handleClick} type="button">
//     Simulate 403
//   </button>
// );

// const Button403Enhance = enhance403(Button403);

// const enhanceFetch = compose(
//   withAuthentication(fetch),
//   withProps(props => ({
//     handleClick: e => {
//       e.preventDefault();
//       props
//         .fetch('http://localhost:3000/')
//         .then(() => alert('fetch end'))
//         .catch(e => alert(e));
//     },
//   })),
// );
// const ButtonFetch = ({ handleClick }) => (
//   <Button onClick={handleClick} type="button">
//     Simulate Fetch
//   </Button>
// );

//const ButtonFetchEnhance = enhanceFetch(ButtonFetch);

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