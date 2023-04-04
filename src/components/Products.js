import React, { useContext } from 'react';
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import '.././styles/Products.css';
import myData from '../data/products.json';
import { ThemeContext } from './useTheme';
import { CategoryContext } from './useCategory';


function Products() {
    const { theme } = useContext(ThemeContext);

    const { category } = useContext(CategoryContext);
    // * pernaw apla tis times sto category
    //TODO: Na kanw ena function pou na kanei render to katalilo array kathe fora 
    let productList;

    if (category === 'Technology') {
        productList = myData.products.technology.map(item => {
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
    }
    else if (category === "Home & Garden") {
        productList = myData.products.home_and_garden.map(item => {
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
    }
    else if (category === "Books") {
        productList = myData.products.books.map(item => {
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
    }
    else if (category === "Kids") {
        productList = myData.products.kids.map(item => {
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
    }
    else if (category === "Fashion") {
        productList = myData.products.fashion.map(item => {
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
    }
    else if (category === "Sports") {
        productList = myData.products.sports.map(item => {
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
    }
    else if (category === "Health & Beauty") {
        productList = myData.products.health_and_beauty.map(item => {
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
    }



    return (
        <>
            <div className='products-header-container' style={{
                color: theme === 'light' ? 'var(--black)' : 'var(--itemColor)'
            }} >
                <p className='pageHeader'>Products</p>
                <h2 >{category}</h2>
            </div>
            <section className="productsContainer">
                <ProductCategories theme={theme} />
                <div className="items" style={{
                    backgroundColor: theme === 'light' ? null : 'var(--veryDarkGray)'
                }}>
                    {productList}
                </div>
            </section>
        </>
    )
};

export default Products;