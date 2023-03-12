import Item from './Item';
import placeholder from '.././assets/placeholder.svg';

function Recommendations() {
    return (
        <>
            <h2 className='recomHeader'>Recommendations for you!</h2>
            <section className="recommendations">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </section>
        </>

    )
};

export default Recommendations;