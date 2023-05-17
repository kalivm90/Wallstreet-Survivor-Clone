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
import Field from "../components/RegisterFormField";
// db
import WSS_DB from "../assets/database/db";

/* 
    TODO registering with just email and password only adds the user to auth and not to DB, add code to signinwithemailandpassword to add user to "users"
    open chatgpt it will give you a good idea on what to do.
 */
const Register = () => {
    const [email, setEmail] = useState("")


    const [portfolio, setPortfolio] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [yob, setYob] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [student, setStudent] = useState("");
    const [country, setCountry] = useState("");


    const [user, loading, error] = useAuthState(auth);
    // context 
    const {errorMessage, setErrorMessage} = useContext(ErrorContext);

    const navigate = useNavigate();
    const db = WSS_DB();


    useEffect(() => {
        if (loading) return;
        if (user) navigate("/")
    }, [user, loading]);

    const register = (e) => {
        e.preventDefault();
        // if (!name || !email || !password) {
        //     console.log("not filled out")
        // }
        // registerWithEmailAndPassword(name, email, password);
        // db.addDocument("users", {name: name, email: email, password: password})
        console.log("done");
    }

    return (
        <div className="Register">
            <div className="Register-Container">
                <div className="Register-Logo">
                    {student}
                    <GoBack/>
                    <img id="register-logo" src={Logo} alt="WSS Logo"></img>
                </div>
                <div className="Register-Content">
                    <h1>Registration</h1>
                    <p id="help-text">*Fields accompanied by an asterisk are required!</p>
                    <button id="login-redirect" onClick={() => navigate("/login")}>Login</button>
                    <form className="Register-Form">
                        {/* <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <button className="Register-Btn" onClick={(e) => register(e)}>Register</button> */}
                        <h3 className="Form-Info">Session information</h3>
                        <Field 
                            type="combo" 
                            name="portfolio" 
                            label="Choose your practice portfolio" 
                            setState={setPortfolio}
                            element="portfolio" 
                            portfolio="My_Practice_Portfolio"/>

                        <h3 className="Form-Info">Login Information <span style={{fontWeight: "lighter"}}>*</span></h3>
                        <Field 
                            type="text" 
                            name="username" 
                            label="Username"
                            setState={setUsername}/>
                        <Field 
                            type="password" 
                            name="password" 
                            label="Password"
                            setState={setPassword}/>
                        <Field 
                            type="password" 
                            name="confirmPassword" 
                            label="Confirm Password"
                            setState={setConfirmPassword}/>
                        <Field 
                            type="combo" 
                            name="yearOfBirth" 
                            label="Year of Birth"
                            setState={setYob} 
                            element="date"/>

                        <h3 className="Form-Info">Registration Information <span style={{fontWeight: "lighter"}}>*</span></h3>
                        <Field 
                            type="text" 
                            name="firstName" 
                            label="First Name"
                            setState={setFirstName}/>
                        <Field 
                            type="text" 
                            name="lastName" 
                            label="Last Name"
                            setState={setLastName}/>
                        <Field 
                            type="radio" 
                            name="student" 
                            label="Are you A Student?"
                            setState={setStudent}/>
                        <Field 
                            type="combo" 
                            name="country" 
                            label="Country" 
                            setState={setCountry}
                            element="country"/>
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