import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { featuredPortfolio, reactPortfolio, wordpressPortfolio, } from "../../data";

export default function Portfolio() {

    // this state will be used for to check which is active and which is not.
    // initial state will be featured
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "react",
            title: "React",
        },
        {
            id: "wordpress",
            title: "WordPress",
        },
        // {
        //     id: "designing",
        //     title: "Designing",
        // },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "wordpress":
                setData(wordpressPortfolio);
                break;
            // case "design":
            //     setData(designPortfolio);
            //     break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected]);


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {/* sending state and props to PortfolioList */}
                {
                    list.map((item) => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))
                }
            </ul>
            <div className="container">
                {
                    data.map((d)=> (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                    ))}
            </div>
        </div>
    )
}
