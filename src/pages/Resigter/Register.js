import React from 'react';
import { getAuth } from '@firebase/auth';

import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/firebase';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { user, registerUser } = useAuth();


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = "/login";



    const NewUser = {
        name: name,
        email: email,
        password: password,
        role: "t"
    };
    console.log(NewUser);

    const registerNewUser = () => {
        registerUser(email, name, password);
        history.push(redirect_uri);
    }

    // const handleHistory = () => {
    //     signInUsingGoogle();
    //     setTimeout(() => {
    //         history.push(redirect_uri)
    //     }, 10000);
    // }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        e.preventDefault();
    }

    const handlePasswordChange = (e) => {
        setpassword(e.target.value);
        e.preventDefault();
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
        e.preventDefault();
    }


    return (

        <div id="login">



            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">REGISTER</h5>
                                <form className="form-signin" onSubmit={registerNewUser}>
                                    <div className="form-label-group">

                                        <input onBlur={handleNameChange} type="text" id="" className="form-control" placeholder="Name" required autoFocus />
                                        <label htmlFor="inputEmail">Name</label>
                                    </div>
                                    <div className="form-label-group">

                                        <input onBlur={handleEmailChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input onBlur={handlePasswordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Password</label>
                                        <small className="text-danger">{error}</small>
                                    </div>

                                    <button className="btn btn-lg btn btn-outline-success  btn-block text-uppercase w-100" type="submit">Register</button>
                                    <hr className="my-4" />
                                    <p className="text-center pt-1">Already registered?</p>
                                    <p className="text-center  fs-6 "><Link to="/login">SIGN IN</Link></p>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

};

export default Register;