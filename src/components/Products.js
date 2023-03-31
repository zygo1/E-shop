import React, { useContext } from 'react';
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import '.././styles/Products.css';
import myData from '../data/products.json';
import { ThemeContext } from './useTheme';


function Products() {
    const { theme } = useContext(ThemeContext);

    const productList = myData.products.technology.map(item => {
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
    });
    return (
        <>
            <div className='products-header-container' style={{ color: theme === 'light' ? 'var(--black)' : 'var(--itemColor)' }} >
                <p className='pageHeader'>Products</p>
                <h2 >Selected Category</h2>
            </div>
            <section className="productsContainer">
                <ProductCategories theme={theme} />
                <div className="items" style={{
                    backgroundColor: theme === 'light' ? 'var(--itemColor)' : 'var(--veryDarkGray)'
                }}>
                    {productList}
                </div>
            </section>
        </>
    )
};

export default Products;