import NavItem from "./NavItem"
const Nav = () => {
    return (
        <div className="navbarcover">
            <div className="navbar">
                <NavItem val="Home" />
                <NavItem val="About" />
                <NavItem val="Skills" />
                <NavItem val="Project" />
                <NavItem val="Education" />
                <NavItem val="Contact" />
            </div>
        </div>
    )
}

export default Nav;