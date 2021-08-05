import { useState } from "react";
import "./Work.scss";

export default function Work() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, culpa?",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, culpa?",
            img: "https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, culpa?",
            img: "https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900",
        },
    ];

    // way parameter check the direction left or right 
    // first condition check if way === left then check currentSlide which is 0 and inside it check if the currentSlide is > 0 then minus 1 otherwise move it to the last one which is 2. 
    // second condition way === "right" then check currentSlide is smaller then data length which is 3 and in array its 0,1,2 then minus -1 with length, so add 1 in currentSlide otherwise move to 0. 
    const handleClick = ((way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    });
    return (
        <div className="work" id="work">
            {/* transform change the state of slider, current state is 0, 0*100=0 it means remain same and so on.   */}
            <div className="slider" 
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {
                    data.map((d) => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={d.icon} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc}</p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img
                                        src={d.img}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow left" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right"
                alt="arrow right" onClick={() => handleClick()} />
        </div>
    );
}
