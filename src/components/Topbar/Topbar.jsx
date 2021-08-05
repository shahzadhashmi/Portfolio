import { Person, Mail, } from "@material-ui/icons";
import "./Topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Shahzad Hashmi</a>
                    <div className="itemContainer">
                        <a href="callto:+923049040689" target="blank">
                            <Person className="icon" />
                            <span>+923049040689</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="mailto:shahzad34892@outlook.com" target="blank">
                        <Mail className="icon" />
                        <span>shahzad3492@outlook.com</span>
                        </a>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
        </div >
    )
}
