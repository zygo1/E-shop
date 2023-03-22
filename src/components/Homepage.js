import Offers from "./Offers";
import Footer from "./Footer";
import Promotion from "./Promotion";
import Recommendations from "./Recommendations";

function Homepage() {
    return (
        <>
            <p className='pageHeader'>Home</p>
            <Promotion />
            <Recommendations />
            <Offers />
            <Footer />
        </>
    )
};

export default Homepage;