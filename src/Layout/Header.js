// import React from 'react';
// // import { AuthenticationContext } from '@axa-fr/react-oidc-context';
// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button'

// const headerStyle = {
//   display: 'flex',
//   backgroundColor: '#8aaee6',
//   justifyContent: 'space-between',
//   padding: 10,
// };

// const buttonStyle = {
//   height: 30
// }

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'underline',
// };

// export default () => (
//   <header>
//     <AuthenticationContext.Consumer>
//       {props => {
//         return (
//           <div style={headerStyle}>
//             <h4>
//               <Link style={linkStyle} to="/">
//                 HOME
//               </Link>
//             </h4>

//             {props.oidcUser || !props.isEnabled ? (
//               <ul>
//                 <li>
//                   <Link style={linkStyle} to="/dashboard">
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <Link style={linkStyle} to="/admin">
//                     Admin
//                   </Link>
//                 </li>
//                 <Button onClick={props.logout}>logout</Button>
//               </ul>
//             ) : (
//               <Link
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 style={buttonStyle}
//               to="/signin">login</Link>
//             )}
//           </div>
//         );
//       }}
//     </AuthenticationContext.Consumer>
//   </header>
// );