import { useContext, useEffect, useState } from "react"
import {auth, signInWithEmailAndPassword, signInWithGoogle} from "../util/fireabse"
import {useAuthState} from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
// styles/images
import "../assets/styles/pages/Login.css"
import Logo from "../assets/images/logo.png"
// contexts
import { ErrorContext } from "../contexts/ErrorContext"
// component 
import GoBack from "../components/GoBack";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState("");
    // auth
    const [user, loading, error] = useAuthState(auth);
    // navigate
    const navigate = useNavigate();
    // handles errors
    const {errorMessage, setErrorMessage} = useContext(ErrorContext);

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/");
        }
    }, [user, loading]);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const message = error.code 
            setErrorMessage(message)
            navigate("/error")
        })
    }

    const handleClick = () => navigate("/");

    return (
        <div className="Login">
            <div className="Login-Window">
                <div className="Login-Left">
                    <GoBack/>
                    <div className="Left-Logo">
                        <img src={Logo} alt="WSS Logo"></img>
                    </div>
                </div>
                <div className="Login-Right">
                    <div className="Right-Container">
                        <h1>Login</h1>
                        <form>
                            <div className="Login-Field">
                                <input type="text" placeholder="Username"></input>
                            </div>
                            <div className="Login-Field">
                                <input type="text" placeholder="Password"></input>
                            </div>
                            <div className="Forgot-Container">
                                <button className="forgot-username forgot">forgot username</button>
                                <button className="forgot-password forgot">forgot password</button>
                            </div>
                            <div className="Login-Action">
                                <button className="login" onClick={(e) => handleLogin(e)}>Log Me In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;


{/* <div className="Login">
<div className="Login-Window">
    <GoBack/>
    <div className="Window-Logo">
        <img src={Logo}></img>
    </div>
    <div className="Login-Content">
        <h1>Login</h1>
        <form>
            <div className="Login-Field">
                <input type="text" placeholder="Username"></input>
            </div>
            <div className="Login-Field">
                <input type="text" placeholder="Password"></input>
            </div>
            <div className="Forgot-Container">
                <button className="forgot-username forgot">forgot password</button>
                <button className="forgot-password forgot">forgot username</button>
            </div>
            <div className="Login-Action">
                <button className="login" onClick={(e) => handleLogin(e)}>Log Me In</button>
            </div>
        </form>
    </div>
</div>
</div> */}