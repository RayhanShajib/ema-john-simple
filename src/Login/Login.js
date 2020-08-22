import React from 'react';
import './Login.css';
import Auth from './auth';

const Login = () => {
     const auth=Auth();
     const handleSingIn = () => {
        auth.singInWithGoogle()
        .then(res => {
            window.location.pathname = '/review'
        })
    }
 
    return (
        <div className="LoginFrom">
        
        <h1>Please Login</h1>

           { auth.user && <span>
           <h1 style={{color:'blue'}}>Welcome, {auth.user.name}</h1>
           </span>           
            }


            { auth.user ? <button onClick={auth.singOut}>Sing Out</button> :
                <button onClick={handleSingIn}>Sign in with google</button>
            }
        </div>
    );
};

export default Login;



