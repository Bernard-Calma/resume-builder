import { NavLink } from "react-router-dom"

const NavBar = () => {

    return(
        <div style={Styles.container}>
            <NavLink to = "ContactInfo">Contact Information</NavLink>
            <h4>Eudcation</h4>
            <h4>Work Experience</h4>
            <h4>Skills</h4>
        </div>
    )
}

export default NavBar

const Styles = {
    container: {
        paddingTop: 5,
        display: "flex",
        justifyContent: "space-around"
    }
}