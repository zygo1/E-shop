import Offers from "./Offers";
import Footer from "./Footer";
import Promotion from "./Promotion";
import Navbar from "./Navbar";
import Recommendations from "./Recommendations";

function Homepage() {
    return (
        <>
            <Navbar />
            <p className='pageHeader'>Home</p>
            <Promotion />
            <Recommendations />
            <Offers />
            <Footer />
        </>
    )
};

export default Homepage;