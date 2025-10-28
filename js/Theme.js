/* Selected DOM elements using there ID*/
const toggleButton = document.getElementById("theme-toggle");
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon')

const theme = localStorage.getItem('theme') || "";

if(theme){
    /* If theme is set in local storage use that to control theme */
    if(theme === "dark"){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkIcon.classList.add('current');
    }else{
        lightIcon.classList.add('current')
    }
}else{
    /* If it is not in local storage get preferred media from browser and apply it */
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkIcon.classList.add('current');
    }else{
        lightIcon.classList.add('current');
    }
}

/* Click event to toggle between dark mode and light mode */
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if(currentTheme === "dark"){
        document.documentElement.setAttribute('data-theme', 'light');
        lightIcon.classList.add('current');
        darkIcon.classList.remove('current');
        localStorage.setItem('theme', 'light');
    }else{
        document.documentElement.setAttribute('data-theme', 'dark')
        darkIcon.classList.add('current');
        lightIcon.classList.remove('current');
        localStorage.setItem('theme', 'dark');
    }
});