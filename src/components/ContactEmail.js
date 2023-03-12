import email from '.././assets/email.svg';

function ContactEmail() {
    return (
        <section className='contactItem'>
            <div className="emailHeader">
                <img src={email} alt="" />
                <h4>If you have any questions, send us an E-mail!</h4>
            </div>
            <p>Do you have any specific question? Fill out the form and we will contact you soon!</p>
        </section>

    )
};

export default ContactEmail;