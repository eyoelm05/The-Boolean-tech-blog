
/* Get value to search from url */
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const search = searchParams.get('search');

/* If a user tries to manually access this page without a search parameter load index.html */
if(!search){
    window.location.href = "/index.html"
}

/* Get Results section element from DOM */
const results = document.getElementById('results');

const searchAlgorithm = (needle, haystack) => {
    /* Convert search to lower case */
    const lowerNeedle = needle.toLowerCase();

    /* Counter to check if the search found a result */
    let resultFound = 0
    for (let i = 0; i < haystack.length; i++) {
        const element = haystack[i];

        /* Combine all searchable fields and convert them to lower case */
        const searchableText = [
            element.title,
            element.shortDescription,
            element.description,
            element.author,
            element.category
        ].filter(Boolean) // remove undefined/null
        .join(" ")
        .toLowerCase();

        if (searchableText.includes(lowerNeedle)) {
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
            results.innerHTML += resultHTML;
            resultFound += 1;
        }
    }

    if(resultFound <= 0){
        const notFoundHTML = `
            <div class="not-found-container">
                <h4 class="not-found-message title">No results found for "${needle}"</h4>
                <a class="not-found-link" href="../index.html">Back to Home</a>
            </div>
        `
        results.innerHTML += notFoundHTML
    }
};

searchAlgorithm(search,data)