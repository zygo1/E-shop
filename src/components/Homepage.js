import Offers from "./Offers";
import Footer from "./Footer";
import Promotion from "./Promotion";
import Recommendations from "./Recommendations";
import { useContext } from "react";
import { ThemeContext } from "./useTheme";

function Homepage() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <p className='pageHeader' style={{
                color: theme === 'light' ? 'var(--black)' : 'var(--white)'
            }}>Home</p>
            <Promotion />
            <Recommendations />
            <Offers />
            <Footer />
        </>
    )
};

export default Homepage;