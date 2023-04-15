import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './useTheme';
import { CategoryContext } from './useCategory';
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import '.././styles/Products.css';



function Products() {
    const { theme } = useContext(ThemeContext);
    const [products, setProducts] = useState([]);
    const { category, changeCategory } = useContext(CategoryContext);
    const [filter, setFilter] = useState('Popularity');

    useEffect(() => {
        const fetchProducts = async () => {
            if (category === 'Technology') {
                const techResponse = await fetch("https://fakestoreapi.com/products/category/electronics");
                const techData = await techResponse.json();
                setProducts(techData);
            }
            else if (category === "Women's Clothing") {
                const womenResponse = await fetch("https://fakestoreapi.com/products/category/women's clothing");
                const womenData = await womenResponse.json();
                setProducts(womenData);

            }
            else if (category === "Men's Clothing") {
                const mensResponse = await fetch("https://fakestoreapi.com/products/category/men's clothing");
                const mensData = await mensResponse.json();
                setProducts(mensData);
            }
            else if (category === "Fashion") {
                const fashionResponse = await fetch("https://fakestoreapi.com/products/category/jewelery");
                const fashionData = await fashionResponse.json();
                setProducts(fashionData);
            }
            else {

            }
        }
        fetchProducts();
    }, [category]);

    let productList = products.map(item => {
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
    })

    // Sorting the products
    if (filter === 'Price ascending') {
        productList.sort((a, b) => a.props.price - b.props.price);
    }
    else if (filter === 'Price descending') {
        productList.sort((a, b) => b.props.price - a.props.price);
    }

    return productList.length > 0 ? (
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
    ) : (
        <div className='data-pending'>
            <h2> Please wait. Data pending...</h2>
        </div>
    )
};

export default Products;