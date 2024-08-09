import { useState } from "react"
const NavItem = (props) => {
    
    return (
            <a href={`#${props.val}`} className="navItem inactive ">{props.val}</a>
    )
}
export default NavItem;