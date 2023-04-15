


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '50px 25px',
    width: "500px",
    height: "500px",
    zIndex: 1000,
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7',
    zIndex: 1000
};

const BUTTON_STYLES = {
    width: "auto",
    height: "auto"
}

export default function ModalItems(props) {
    if (!props.open) {
        return null
    }

    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button style={BUTTON_STYLES} onClick={props.onClose}>Close modal</button>
            </div>
        </>
    )
};