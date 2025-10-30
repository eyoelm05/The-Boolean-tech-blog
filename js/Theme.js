/* Java Script to handle Theme change */

/* Set Theme to Light Theme */
function setLight(){
    /* Used to change toggles */
    const lightIcon = document.getElementById('light-icon'); // Select light icon from DOM
    const darkIcon = document.getElementById('dark-icon'); // Select dark icon from DOM

    /* Used to change the colours in global.css */
    document.documentElement.setAttribute('data-theme', 'light'); // Set data-theme attribute to light

    /* Change toggle colours */
    lightIcon.classList.add('current'); // Add current class to light Icon
    darkIcon.classList.remove('current'); // Remove current class from dark Icon

    /* Set theme value to store preference between page changes */
    localStorage.setItem('theme', 'light');
}

/* Set Theme to dark Theme */
function setDark(){
    /* Used to change toggles */
    const lightIcon = document.getElementById('light-icon'); // Select light icon from DOM
    const darkIcon = document.getElementById('dark-icon'); // Select dark icon from DOM

    /* Used to change the colours in global.css */
    document.documentElement.setAttribute('data-theme', 'dark') // Set data-theme attribute to dark

    /* Change Toggle Colours */
    darkIcon.classList.add('current'); // Add current class to dark Icon
    lightIcon.classList.remove('current'); // Remove current class from dark Icon

    /* Set theme value to store preference between page changes */
    localStorage.setItem('theme', 'dark');
}

function toggleTheme(){
    /* Get current theme from data theme attribute */
    const currentTheme = document.documentElement.getAttribute('data-theme') || null;

    /* If current theme exist and is dark set it to light 
     * Else set it to dark
     */
    if(currentTheme && currentTheme === "dark"){
        setLight()
    }else{
        setDark()
    }
}

/* Wait for the HTML code to load before selecting elements */
document.addEventListener("DOMContentLoaded", () => {
    /* Get theme from local storage */
    const theme = localStorage.getItem('theme') || "";

    /* Check if theme is dark theme from local storage 
     * Or Check if user has set dark mode as preferred state on their browser
     */
    if( theme === "dark" 
        || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ){
        setDark()
    }else{
        setLight()
    }
    /* Select toggle button from DOM */
    const toggleButton = document.getElementById("theme-toggle");

    /* Click event to toggle between dark mode and light mode */
    toggleButton.addEventListener('click', toggleTheme);
});