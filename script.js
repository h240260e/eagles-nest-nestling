const newsContainer = document.getElementById("news-cards");

fetch("news.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load news.json");
        }

        return response.json();
    })
    .then(news => {

        newsContainer.innerHTML = "";

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