import React, { useRef } from 'react';
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import '.././styles/Products.css';
import myData from '.././data/products.json';


function Products() {
    const productList = myData.products.technology.map(item => {
        return (
            <Item
                key={item.id}
                name={item.name}
                price={item.price}
                source={require(`.././${item.img_path}`)}
            />
        )
    });
    return (
        <>
            <div className='products-header-container'>
                <p className='pageHeader'>Products</p>
                <h2>Selected Category</h2>
            </div>
            <section className="productsContainer">
                <ProductCategories />
                <div className="items">
                    {productList}
                </div>
            </section>
        </>
    )
};

export default Products;