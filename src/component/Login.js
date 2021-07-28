import React from 'react';
import "./Login.css";
import {loginURL} from "./spotify"

function Login({user}) {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="login__logo" />
            <a href={loginURL}>LOGIN WITH SPOTIFY</a>
            <p>{user}</p>
        </div>
    )
}

export default Login;
