import faq from '.././assets/faq.svg';

function ContactFaQ(props) {
    return (
        <section className='contactItem' style={{
            backgroundColor: props.theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
            boxShadow: props.theme === 'light' ? '0px 0px 3px rgb(104, 104, 104)' : 'none'
        }}>
            <div className="faqHeader">
                <img src={faq} alt="" />
                <h4>Find answers in the Frequently Asked Questions!</h4>
            </div>
            <p>Here you are going to find answers to the most common questions. Give it a try!</p>
        </section>

    )
};

export default ContactFaQ;