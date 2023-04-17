import Item from './Item';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import ".././styles/RecomOffers.css";
import { useEffect, useState } from 'react';

function Recommendations() {
    const [recomProducts, setRecomProducts] = useState([]);

    const loading_symbol = css`
    display:block;
    margin: 0 auto;
    border-color:red;
    `;

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

    return recomList.length > 0 ? (
        <section className='mainRecomm'>
            <h2 className='recomHeader'>Recommendations for you!</h2>
            <div className="recommendations">
                {recomList}
            </div>
        </section>
    ) : <div className='loading-symbol'>
        <ClipLoader css={loading_symbol} size={100} color='#123abc' />
    </div>
};

export default Recommendations;