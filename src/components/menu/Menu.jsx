import "./Menu.scss";


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    {/* NOt a good practice to place function in every single li just make a component and use it one time and call it here */}
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#work">Work</a>
                    </li>
                    {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
