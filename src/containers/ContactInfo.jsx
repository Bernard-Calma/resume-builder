const ContactInfo = () => {
    return(
        <div style={Styles.container}>
            <h1>Contact Information</h1>
            <form style ={ Styles.form }>

                        <div style = {Styles.fieldSet}>
                            <input type="text" name="firstName" id = "inputFirstName" placeholder="First Name"/>
                            <input type="text" name="lastName" id = "inputLastName" placeholder="Last Name"/>
                        </div>
                        <div style = {Styles.fieldSet}>
                            <input type="text" name="address" id = "inputAddress" placeholder="Address"/>
                        </div>
                        <div>
                            <input type="text" name="city" id = "inputCity" placeholder="City"/>
                            <input type="text" name="state" id = "inputState" placeholder="State" maxLength = "2"/>
                            <input type="text" name="zipCode" id = "inputZipCode" placeholder="Zip Code" maxLength = "5"/>
                        </div>

                        <div style = {Styles.fieldSet}>
                            <input type="text" name="phoneNumber" id = "inputPhoneNumber"placeholder="Phone Number"/>
                            <input type="text" name="email" id = "inputEmail" placeholder="Email Address"/>
                        </div>
            </form>
        </div>
    )
}

export default ContactInfo

const Styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingRight: 20,
        width: "100%"
    },
    fieldSet: {
        display: "flex",
        flexDirection: "row",
        width: "95%"
    }, 
    form: {
        width: "60%"
    },
}