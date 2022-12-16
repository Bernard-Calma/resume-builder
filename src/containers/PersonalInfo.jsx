const PersonalInfo = () => {
    return(
        <div style={Styles.container}>
            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <div style = {Styles.fieldSet}>
                        <input type="text" name="firstName" placeholder="First Name"/>
                        <input type="text" name="lastName" placeholder="Last Name"/>
                    </div>
                    
                    
                </fieldset>
                
            </form>
        </div>
    )
}

export default PersonalInfo

const Styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingRight: 20,
    },
    fieldSet: {
        display: "flex",
        flexDirection: "column"
    }
}