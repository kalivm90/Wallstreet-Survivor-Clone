import myLogo from "../assets/images/logo.png"
import "../assets/styles/components/Navbar.css"
import { Link } from "react-router-dom";
import { ChevronDown } from "react-bootstrap-icons";


const Navbar = () => {
    return (
      <div className='Navbar'>
        <div className="Navbar-Logo">
          <img src={myLogo} alt="logo"></img>
        </div>
        <div className="Navbar-Links">
            <div className="Link-Item">
              <Link className="Link" to={"/courses"}>courses</Link>
              <ChevronDown className="cheveron"/> 
            </div>
            <div className="Link-Item">
              <Link className="Link" to={"/stock-market-game"}>stock game</Link>
              <ChevronDown className="cheveron"/> 
            </div>
            <div className="Link-Item">
            <Link className="Link" to={"/investing"}>investing ideas</Link>
              <ChevronDown className="cheveron"/> 
            </div>
            <div className="Link-Item">
            <Link className="Link" to={"/starter-guides"}>starter guides</Link>
              <ChevronDown className="cheveron"/> 
            </div>
        </div>
        {/* TODO ADD ACTION BUTTONS */}
      </div>
    );
}

export default Navbar