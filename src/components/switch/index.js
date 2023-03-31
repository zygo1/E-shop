import { useContext } from "react"
import { ThemeContext } from "../useTheme"
import { FaMoon, FaSun } from 'react-icons/fa';
import './Styles.css'


const Switch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
            />
            <span className="slider round" />
            <div className="moon" style={{
                color: 'white',
                display: theme === 'light' ? null : 'none'
            }} ><FaMoon />
            </div>
            <div className="sun" style={{
                color: theme === 'light' ? 'white' : 'var(--darkGray)',
                display: theme === 'light' ? 'none' : null
            }} ><FaSun />
            </div>
        </label>
    )
};

export default Switch;