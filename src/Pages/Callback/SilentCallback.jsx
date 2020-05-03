import userManager from '../../Utils/UserManager';
import React from 'react';


export function SilentCallback(props) {
    userManager.signinSilentCallback();
    return(<div></div>);
}