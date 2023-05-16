import { useEffect } from "react"
import "../assets/styles/pages/Error.css"
import { useNavigate } from "react-router-dom"

const Error = ({message, errorCode}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!message) {
            navigate("/");
        }
    }, []);

    return (
        <div className="Error">
            <div className="Error-Title">
                <h1>Whoops {errorCode}</h1>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default Error