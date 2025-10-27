
/* Search Bar Toggle */

/* Get the search bar and search toggle button element by its ID */
const searchBar = document.getElementById('searchBar');
const searchToggleButton = document.getElementById('search-toggle')
const hamBurgerMenu = document.querySelector('.navbar-toggler')

/* Listen for a click anywhere on the document */
document.addEventListener('click', function(event) {
    
    /* This is used in order to keep bootstraps animation for hiding the element */
    /* Taken from bootstrap documentation: https://getbootstrap.com/docs/5.3/components/collapse/#methods*/
    const searchCollapseInstance = bootstrap.Collapse.getInstance(searchBar);

    /* Check if the search bar is currently visible */
    const isSearchOpen = searchBar.classList.contains('show');

    /* Check if the click was inside the search bar or on the toggle button */
    const isClickInsideSearch = searchBar.contains(event.target);
    const isClickOnToggle = searchToggleButton.contains(event.target);

    /* Check if the click was on hamburger Menu */
    const isClickOnHamburgerMenu = hamBurgerMenu.contains(event.target);

    /*
    * Check if the menu was open when clicked 
    * if aria-expanded = false : the menu is expanded
    * if aria-expanded = true : the menu is not open
    * This is because bootstraps click event runs before this javascript
    */
    const isMenuExpanded = hamBurgerMenu.getAttribute("aria-expanded") === "false";

    if (isSearchOpen && !isClickInsideSearch && !isClickOnToggle) {
        /* If hamburger clicked and menu is not expanded do nothing */
        if(isClickOnHamburgerMenu && !isMenuExpanded){
            return null;
        }else{
            searchCollapseInstance.hide();
        }
    }
});


/* Search Bar functionality */

searchBar.addEventListener('submit', (event) => {
    event.preventDefault(); /* Cancels submit event */
    const inputValue = document.getElementById('searchInput').value
    
    window.location.href = `/html/Search.html?search=${inputValue}`
});