const Header = () =>{

    return(
        <div style={Styles.container}>
            <h3>=</h3>
            <h1>Resume Builder</h1>
            <h3>Login</h3>
        </div>
    )
}

export default Header


const Styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20
    }
}