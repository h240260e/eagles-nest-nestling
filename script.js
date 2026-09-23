const sheetURL = "https://script.google.com/a/macros/hit.ac.zw/s/AKfycbzCGTdXbEhW7m3tGy4U3RYWGq7xvO3FCqAfZpsh8TyovK6BeX3NCxcXtGfjBcxrSjRl/exec";

const newsContainer = document.getElementById("news-cards");

fetch(sheetURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not connect to the news service.");
        }

        return response.json();
    })
    .then(news => {

        console.log("News received:", news);

        newsContainer.innerHTML = "";

        if (news.length === 0) {
            newsContainer.innerHTML = "<p>No news available at the moment.</p>";
            return;
        }

        news.forEach(item => {

            const card = document.createElement("div");
            card.className = "news-card";

            card.innerHTML = `
                <h3>${item.title}</h3>
                <p class="news-date">${item.date}</p>
                <p>${item.description}</p>
            `;

            newsContainer.appendChild(card);
        });

    })
    .catch(error => {

        console.error("Error loading news:", error);

        newsContainer.innerHTML = `
            <p>News could not be loaded at the moment.</p>
        `;

    });