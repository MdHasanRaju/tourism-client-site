import React from 'react';
import {useHistory, useLocation} from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {user, setUser, setError, handleGoogleSignIn, setIsLoading} = useAuth();
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
      <div className="text-center d-flex justify-content-center align-items-center my-5 ">
        <div className="border border-info p-4">
          <h2>Please Login</h2>
          <div>
            <button
              className="btn btn-primary border-0 rounded-1"
              onClick={handleGoogleLogin}
            >
              <i className="fab fa-google text-white"></i> Sign In With Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;