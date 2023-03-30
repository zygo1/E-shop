import Item from './Item';
import ".././styles/RecomOffers.css";
import myData from '../data/recommendations.json';

function Recommendations() {
    const recomList = myData.recommendations.map(item => {
        return (
            <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                altsource={item.img_path}
                source={require(`.././${item.img_path}`)}
            />
        )
    })

    return (
        <section className='mainRecomm'>
            <h2 className='recomHeader'>Recommendations for you!</h2>
            <div className="recommendations">
                {recomList}
            </div>
        </section>
    )
};

export default Recommendations;