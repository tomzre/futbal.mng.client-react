import React from 'react';
import MetaTags from 'react-meta-tags';

function Root(props) {
  return (
      <div >
        <MetaTags>
          <meta name="google-signin-client_id" content="443586087167-pksoiqipgh3rn03rsmdur9h6iufkq3gf.apps.googleusercontent.com"/>
        </MetaTags>
        { props.children }
      </div>
  );
}


export default Root;