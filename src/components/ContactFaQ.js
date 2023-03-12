import faq from '.././assets/faq.svg';

function ContactFaQ() {
    return (
        <section className='contactItem'>
            <div className="faqHeader">
                <img src={faq} alt="" />
                <h4>Find answers in the Frequently Asked Questions!</h4>
            </div>
            <p>Here you are going to find answers to the most common questions. Give it a try!</p>
        </section>

    )
};

export default ContactFaQ;