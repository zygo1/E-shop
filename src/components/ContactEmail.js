function ContactEmail() {
    return (
        <>
            <h1 className="headerContact">Hello USER, do you need any help?</h1>
            <section className="emailContact">
                <h3 className="formTitle">Contact us via e-mail</h3>
                <form className="contactForm">
                    <label for="email" className="contactLabel">E-mail </label>
                    <input type={"email"} name="email" id="email" className="contactText"></input>
                    <label for="title" className="contactLabel">Title</label>
                    <input type={"text"} name="title" id="title" className="contactText"></input>
                    <label for="description" className="contactLabel">Description</label>
                    <textarea type="text" name="description" id="description" className="contactText"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </>
    )
};

export default ContactEmail;