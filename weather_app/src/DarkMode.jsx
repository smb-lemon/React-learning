import './DarkMode.css';
import { useEffect, useState } from "react";

 function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
            if (localTheme) {
                setIsDarkMode(localTheme === 'dark');
            }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
            localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div>
            <button onClick={toggleTheme}>
            Switch To {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        </div>
        
    );
}
export default DarkMode;