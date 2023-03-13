import Navbar from "./Navbar";
import Item from "./Item";
import ProductCategories from "./ProductCategories";
import './styles/Products.css';

function Products() {
    return (
        <>
            <Navbar />
            <section className="container">
                <ProductCategories />
                <div className="items">
                    <h2 selectedCategory>Selected Category</h2>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </section>
        </>
    )
};

export default Products;