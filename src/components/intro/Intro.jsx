import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
            {
                backDelay: 1500,
                backSpeed: 60,
                showCursor: true,
                strings: ['React', 'WordPress Website', 'Developer']
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/shahzad1.png" alt="my image" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Shahzad Hashmi</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="Down arrow" />
                </a>
            </div>
        </div>
    )
}
