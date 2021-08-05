import { useState } from "react";
import "./Contact.scss";
import { Facebook, Mail, GitHub, LinkedIn } from "@material-ui/icons";
import emailjs from "emailjs-com";


export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setMessage(true);
        setMessage(alert("Thanks I'll reply ASAP"));

        emailjs.sendForm('gmail', 'template_fzcgfld', e.target, 'user_DJkDmiukfnoffXEykEJBO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="/assets/shake.svg" alt="" />
                <div className="socialMedia">
                    <div className="iconLink">
                        <a href="https://www.linkedin.com/in/shahzad-ahmad-hashmi-314121180/" target="blank">
                            <LinkedIn className="icon" />
                        </a>
                    </div>
                    <div className="iconLink">
                        <a href="https://www.facebook.com/shahzad.hashmi.1257" target="blank">
                            <Facebook className="icon" />
                        </a>
                    </div>
                    <div className="iconLink">
                        <a href="https://github.com/shahzadhashmi " target="blank">
                            <GitHub className="icon" />
                        </a>
                    </div>
                    <div className="iconLink">
                        <a href="mailto: shahzad3492@outlook.com" target="blank">
                            <Mail className="icon" />
                        </a>
                    </div>
                </div>

            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name="email" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {/* {message && <span> Thanks, I'll Reply ASAP :)</span>} */}
                </form>
            </div>
        </div>
    )
}
