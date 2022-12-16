import NavBar from "../components/NavBar"

const Header = () =>{

    return(
        <div>
            <div style={Styles.container}>
                <h3>=</h3>
                <h1>Resume Builder</h1>
                <h3>Login</h3>
            </div>
            <NavBar />
        </div>

    )
}

export default Header


const Styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        alignText: "center",
        backgroundColor: "gray",
        boxShadow: "3px 3px 5px 5px",
    }
}