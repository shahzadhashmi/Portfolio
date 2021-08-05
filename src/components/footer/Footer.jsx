import { Facebook } from "@material-ui/icons";
import { Mail } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import "./Footer.scss";


export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="wrapper">
                <div className="center">
                    <LinkedIn className="icon"/>
                    <Facebook className="icon"/>
                    <GitHub className="icon"/>
                    <Mail className="icon"/>
                </div>
            </div>
        </div>
    )
}
