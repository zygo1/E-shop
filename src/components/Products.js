import React, { useContext, useState } from 'react';
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import '.././styles/Products.css';
import myData from '../data/products.json';
import { ThemeContext } from './useTheme';
import { CategoryContext } from './useCategory';


function Products() {
    const { theme } = useContext(ThemeContext);

    const [filter, setFilter] = useState('Popularity');

    const { category, changeCategory } = useContext(CategoryContext);
    let productList;
    // Rendering the items
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
    else {
        changeCategory('Technology')
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

    // Sorting the items
    if (filter === 'Price ascending') {
        productList.sort((a, b) => a.props.price - b.props.price);
    }
    else if (filter === 'Price descending') {
        productList.sort((a, b) => b.props.price - a.props.price);
    }
    else {

    }

    return (
        <>
            <div className='products-header-container'  >
                <p className='pageHeader' style={{
                    color: theme === 'light' ? 'var(--black)' : 'var(--white)'
                }}>Products</p>
                <div className='categoryname-filters-wrapper'>
                    <h2 style={{
                        color: theme === 'light' ? 'var(--black)' : 'var(--white)'
                    }} >{category}</h2>
                    <div className='filters'>
                        <select value={filter} onChange={(e) => { setFilter(e.target.value) }} style={{
                            backgroundColor: theme === 'light' ? null : 'var(--darkGray)',
                            color: theme === 'light' ? 'var(--black)' : 'var(--white)',
                            boxShadow: theme === 'light' ? null : 'none'
                        }}>
                            <option>Popularity</option>
                            <option>Price ascending</option>
                            <option>Price descending</option>
                        </select>
                    </div>
                </div>
            </div>
            <section className="productsContainer">
                <div className='categories-wrapper'>
                    <ProductCategories theme={theme} />
                </div>
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