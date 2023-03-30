import { useContext } from "react"
import { ThemeContext } from "../useTheme"
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
        </label>
    )
};

export default Switch;