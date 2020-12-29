import React from 'react';

import './AuthPage.scss';
import SignIn from '../../components/signIn/SignIn';

const AuthPage = () => {
    return (
        <div className='auth'>
            <SignIn />
        </div>
    )
}

export default AuthPage;