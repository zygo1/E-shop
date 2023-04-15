import Item from './Item';
import ".././styles/RecomOffers.css";
import { useEffect, useState } from 'react';

function Recommendations() {
    const [recomProducts, setRecomProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setRecomProducts(data);
        };
        fetchData();
    }, []);


    const recomList = recomProducts.map(item => {
        return (
            <div key={item.id}>
                <Item
                    id={item.id}
                    name={item.title}
                    price={item.price}
                    source={item.image}
                    description={item.description}
                />
            </div>
        )
    });

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