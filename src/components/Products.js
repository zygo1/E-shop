import { useState } from 'react';
import React, { useRef } from 'react';
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import '.././styles/Products.css';
import myData from '.././data/products.json';


function Products() {
    const [category, setCategory] = useState();

    const ParentToChild = () => { };

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
            <p className='pageHeader'>Products</p>
            <section className="productsContainer">
                <ProductCategories />
                <div className="items">
                    <h2>Selected Category</h2>
                    {productList}
                </div>
            </section>
        </>
    )
};

export default Products;