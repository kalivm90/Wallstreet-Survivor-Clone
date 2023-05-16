import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
// styles/images
import "../assets/styles/components/GoBack.css"
import { ChevronLeft } from "react-bootstrap-icons";


// this component is placed absolutely so make sure parent component has position: relative
const GoBack = () => {
    const navigate = useNavigate();

    return (
        <div className="GoBack">
            <ChevronLeft id="arrow-left"/>
            <Link to="/" id="go-back">Go Back</Link>
        </div>
    )
}

export default GoBack