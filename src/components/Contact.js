import Navbar from "./Navbar";
import ContactFaQ from "./ContactFaQ";
import ContactEmail from "./ContactEmail";
import ContactChat from "./ContactChat";
import contactImg from '.././assets/contact_img.svg';
import "./styles/Contact.css"

function Contact() {
    return (
        <>
            <Navbar />
            <div className="waysContact">
                <h2> Ways to Contact us!</h2>
            </div>
            <div className="contactItems">
                <ContactEmail />
                <ContactFaQ />
                <ContactChat />
            </div>
            <div className="contactImage">
                <img src={contactImg} />
            </div>
        </>

    )
}

export default Contact;