import { useContext } from 'react';
import placeholder from '.././assets/placeholder.svg';
import ".././styles/RecomOffers.css";
import { ThemeContext } from './useTheme';

function Offers() {
    const { theme } = useContext(ThemeContext);

    return (
        <section>
            <h2 className='offerHeader'>New offers, new opportunities!</h2>
            <div className="info" >
                <div className='offer' style={{
                    backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)'
                }}>
                    <h4>Offer 1</h4>

                    <img src={placeholder} alt="" />
                    <p>Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero turpis, fringilla quis elit
                        sit amet.</p>
                    <button className="infoButton">Show details</button>
                </div>
                <div>
                    Text for offer 1
                </div>
                <div>
                    Text for offer 2
                </div>
                <div className='offer' style={{
                    backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)'
                }}>
                    <h4>Offer 2</h4>
                    <img src={placeholder} alt="" />
                    <p>Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero turpis, fringilla quis elit
                        sit amet.</p>
                    <button className="infoButton">Show details</button>
                </div>
                <div className='offer' style={{
                    backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)'
                }}>
                    <h4>Offer 3</h4>
                    <img src={placeholder} alt="" />
                    <p>Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero turpis, fringilla quis elit
                        sit amet.</p>
                    <button className="infoButton">Show details</button>
                </div>
                <div>
                    Text for offer 3
                </div>
            </div>
        </section>

    )
};

export default Offers;