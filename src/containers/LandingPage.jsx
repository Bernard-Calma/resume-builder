import { NavLink } from "react-router-dom"

const LandingPage = () => {
    return(
        <div style={Styles.container}>
            <NavLink to = "personalInfo">Start Building</NavLink>
        </div>
    )
}

export default LandingPage

const Styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        paddingRight: 20
    }
}