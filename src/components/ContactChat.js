import chat from '.././assets/chat.svg';

function ContactChat(props) {
    return (
        <section className='contactItemChat' style={{
            backgroundColor: props.theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
            boxShadow: props.theme === 'light' ? '0px 0px 3px rgb(104, 104, 104)' : 'none'
        }}>
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