// auth
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle
} from "../util/fireabse";
// react
import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// context 
import { ErrorContext } from "../contexts/ErrorContext";
// loading skeleton with styles
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// style/images
import "../assets/styles/pages/Register.css"
import Logo from "../assets/images/logo.png"
// components 
import GoBack from "../components/GoBack";

/* 
    TODO registering with just email and password only adds the user to auth and not to DB, add code to signinwithemailandpassword to add user to "users"
    open chatgpt it will give you a good idea on what to do.
 */
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    // context 
    const {errorMessage, setErrorMessage} = useContext(ErrorContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/")
    }, [user, loading]);

    const register = () => {
        console.log("jhello")
        if (!name || !email || !password) {
            console.log("not filled out")
        }
        registerWithEmailAndPassword(name, email, password);
    }

    return (
        <div className="Register">
            <div className="Register-Container">
                <div className="Register-Logo">
                    <GoBack/>
                    <img id="register-logo" src={Logo} alt="WSS Logo"></img>
                </div>
                <div className="Register-Content">
                    <h1>Registration</h1>
                    <p id="help-text">*Fields accompanied by an asterisk are required!</p>
                    <button id="login-redirect" onClick={() => navigate("/login")}>Login</button>
                    <form>
                        <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <button className="Register-Btn" onClick={register}>Register</button>
                    </form>
                </div>
            </div>
            {/* <div className="Skeleton" style={{textAlign: "center", display: "flex", justifyContent: "center", alignContent: "center", flexDirection:"column", minHeight: "100vh"}}>
                <SkeletonTheme baseColor="#e4e4e4">
                    <Skeleton width="50%" height="500px">
                    </Skeleton>
                </SkeletonTheme>
            </div> */}
        </div>

    )
}


export default Register

        /* <div className="Register">
            <div className="Register-Container">
                nice
            </div>
        </div> */