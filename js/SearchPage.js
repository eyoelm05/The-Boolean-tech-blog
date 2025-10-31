
/* Search Algorithm */
const searchAlgorithm = (needle, haystack) => {
    /* Convert search to lower case */
    const lowerNeedle = needle.toLowerCase();

    /* Array to append results */
    let results = [];
    for (let i = 0; i < haystack.length; i++) {
        const element = haystack[i];

        /* Combine all searchable texts and convert them to lower case */
        const searchableText = [
            element.title,
            element.shortDescription,
            element.description,
            element.author,
            element.category
        ].filter(Boolean) // Remove undefined/null
        .join(" ") // Join the texts
        .toLowerCase();

        /* If searchable text has needle append it in results */
        if (searchableText.includes(lowerNeedle)) {
            results.push(element) // Append the element to result array
        }
    }

    return results;
};

document.addEventListener("DOMContentLoaded", () => {
    /* Get value to search from url */
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const search = searchParams.get('search');

    /* If a user tries to manually access this page without a search parameter load index.html */
    if(!search){
        window.location.href = "/index.html";
    }

    /* Get Results section element from DOM */
    const resultsContainer = document.getElementById('results');

    /* Run the search algorithm */
    const results = searchAlgorithm(search,data);
    console.log(results)

    /* If no results display not found page */
    if(results.length <= 0){
        const notFoundHTML = `
            <div class="not-found-container">
                <h4 class="not-found-message title">No results found for your search</h4>
                <a class="not-found-link" href="../index.html">Back to Home</a>
            </div>
        `
        resultsContainer.innerHTML += notFoundHTML
    }else{
        /* Else loop over results and create a card for each of them */
        results.forEach(element => {
            /* Raw HTML */
            const resultHTML = `
            <a href="SingleBlog.html?id=${element.id}">
                <section class="card-local">
                    <section class="card-content">
                        <p class="card-badge">${element.category}</p>
                        <h1 class="title card-title">${element.title}</h1>
                        <p class="description card-description">${element.shortDescription}</p>
                        <p class="date"><time datetime="${new Date(element.date)}">${element.date}</time></p>
                    </section>
                    <figure class="image-container">
                        <img src="../images/${element.image_name}" alt="${element.image_alt}" class="card-image">
                    </figure>
                </section>
            </a>
            `;

            /* Append HTML to results container */
            resultsContainer.innerHTML += resultHTML
        });
    }
})
