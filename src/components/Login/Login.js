import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const {user, handleGoogleSignIn} = useFirebase();

    return (
        <div className="text-center">
            <h2>Please Login</h2>
            <div>
                <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;