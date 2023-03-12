import Navbar from "./Navbar";
import ContactFaQ from "./ContactFaQ";
import ContactEmail from "./ContactEmail";
import ContactChat from "./ContactChat";

function Contact() {
    return (
        <>
            <Navbar />
            <div className="waysContact">
                <h2> Ways to Contact us!</h2>
            </div>
            <div className="contactItems">
                <ContactChat />
                <ContactEmail />
                <ContactFaQ />
            </div>

        </>

    )
}

export default Contact;