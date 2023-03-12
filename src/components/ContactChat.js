import chat from '.././assets/chat.svg';

function ContactChat() {
    return (
        <section className='contactItemChat'>
            <div className="chatHeader">
                <img src={chat} alt="" />
                <h4>Feel free to talk to us in the chat!</h4>
            </div>
            <p>Do you have any questions? Chat with us!</p>
            <button>Open Chat!</button>
        </section>
    )
};

export default ContactChat;