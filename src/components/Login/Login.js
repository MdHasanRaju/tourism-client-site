import React from 'react';
import {useHistory, useLocation} from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user,setUser, setError, handleGoogleSignIn, setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location?.state?.from ||'/home';

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
          .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
            history.push(redirect_uri);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    
    }

    return (
        <div className="text-center">
            <h2>Please Login</h2>
            <div>
                <button onClick={handleGoogleLogin}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;