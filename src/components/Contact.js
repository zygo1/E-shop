import ContactFaQ from "./ContactFaQ";
import ContactEmail from "./ContactEmail";
import ContactChat from "./ContactChat";
import contactImg from '.././assets/contact_img.svg';
import ".././styles/Contact.css"
import { useContext } from "react";
import { ThemeContext } from "./useTheme";

function Contact() {
    const { theme } = useContext(ThemeContext);

    return (
        <section>
            <p className='pageHeader'>Contact</p>
            <div className="waysContact">
                <h2> Ways to Contact us!</h2>
            </div>
            <div className="contactItems">
                <ContactEmail />
                <ContactFaQ />
                <ContactChat />
                <div className="contactImage">
                    <img src={contactImg} />
                </div>
            </div>
        </section>

    )
}

export default Contact;