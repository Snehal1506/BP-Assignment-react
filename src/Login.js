import React from 'react';
import fire from './config/fire';


class Login extends React.Component {
    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Logged in");
            })
            .catch((err) => {
                console.log("Error:" + err.toString());
            })
    }

    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Signed up");
            })
            .catch((err) => {
                console.log("Error:" + err.toString());
            })
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <div>Email</div>
                    <input id="email" placeholder="Enter Email.." type="text" />
                </div>
                <div className="content">
                    <div>Password</div>
                    <input id="password" placeholder="Enter Password.." type="text" />
                </div>
                <button className="btn" onClick={this.login}>Login</button>
                <button className="btn" onClick={this.signUp}>Sign Up</button>
            </div>
        )
    }
}

export default Login;
