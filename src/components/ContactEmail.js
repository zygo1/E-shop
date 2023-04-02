import email from '.././assets/email.svg';

function ContactEmail(props) {
    return (
        <section className='contactItem' style={{
            backgroundColor: props.theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
            boxShadow: props.theme === 'light' ? '0px 0px 3px rgb(104, 104, 104)' : 'none'
        }} >
            <div className="emailHeader">
                <img src={email} alt="" />
                <h4>If you have any questions, send us an E-mail!</h4>
            </div>
            <p>Do you have any specific question? Fill out the form and we will contact you soon!</p>
        </section>

    )
};

export default ContactEmail;