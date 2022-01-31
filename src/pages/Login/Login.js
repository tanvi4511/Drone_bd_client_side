import { getAuth } from '@firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import "./style.css";

const Login = () => {
    const { signInUsingGoogle, user, setUser, registerUser, signInWithEmail } = useAuth();


    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";


    const signInWithEmailAndPass = () => {
        signInWithEmail(email, password, location, history);
        history.push("/home");
    }


    // const handleHistory = () => {
    //     signInUsingGoogle().then(result => {
    //         setUser(result.user);
    //         history.push(redirect_uri);
    //     });

    // }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        e.preventDefault();
    }

    const handlePasswordChange = (e) => {

        setpassword(e.target.value);
        e.preventDefault();
    }

    return (

        <div id="login">


            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">PLEASE SIGN IN</h5>
                                <form className="form-signin" onSubmit={signInWithEmailAndPass}>
                                    <div className="form-label-group">
                                        <input onBlur={handleEmailChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                        <label htmlFor="inputEmail">Email address</label>

                                    </div>

                                    <div className="form-label-group">
                                        <input onBlur={handlePasswordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Password</label>
                                        <small className="text-danger">{error}</small>
                                    </div>

                                    <button className="btn btn-lg btn btn-outline-success  btn-block text-uppercase w-100" type="submit">Sign in</button>
                                    <hr className="my-4" />
                                    <p className="text-center pt-1">Don't have an account?</p>
                                    <p className="text-center  fs-6 "><Link to="/register">SIGN UP</Link></p>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;