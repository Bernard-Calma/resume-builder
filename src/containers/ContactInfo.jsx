const ContactInfo = () => {
    return(
        <div style={Styles.container}>
            <form style ={ Styles.form }>
                <fieldset>
                    <legend>Contact Information</legend>

                    <fieldset>
                        <legend>Full Name</legend>
                        <div style = {Styles.name}>
                            <input type="text" name="firstName" placeholder="First Name"/>
                            <input type="text" name="lastName" placeholder="Last Name"/>
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <legend>Address</legend>
                        <div style = {Styles.fieldSet}>
                            <input type="text" name="address" placeholder="Address"/>
                            <input type="text" name="city" placeholder="City"/>
                            <input type="text" name="state" placeholder="State"/>
                            <input type="text" name="zipCode" placeholder="Zip Code"/>
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <legend>Contact Details</legend>
                        <div style = {Styles.fieldSet}>
                            <input type="text" name="phoneNumber" placeholder="Phone Number"/>
                            <input type="text" name="email" placeholder="Email Address"/>
                        </div>
                    </fieldset>
                    

                </fieldset>
                
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
        flexDirection: "column"
    }, 
    form: {
        width: "80%"
    },
    name: {
        diplay: "flex",
        
    }
}