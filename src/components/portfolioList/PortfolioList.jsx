import "./PortfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        // we are receiving state and props here and set if it is active then show active otherwise not active, also on onclick we are changing/updating state by passing id as props, press and delete this state and active other list item state.
        <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={()=> setSelected(id)}
        >
            {title}
        </li>
    )
}
