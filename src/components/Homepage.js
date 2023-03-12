import Header from "./Header";
import Offers from "./Offers";
import Footer from "./Footer";
import Promotion from "./Promotion";
import Navbar from "./Navbar";
import Recommendations from "./Recommendations";

function Homepage() {
    return (
        <>
            <Navbar />
            <Promotion />
            <Recommendations />
            <Offers />
            <Footer />
        </>
    )
};

export default Homepage;