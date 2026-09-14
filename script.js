const sheetURL = "https://script.google.com/a/macros/hit.ac.zw/s/AKfycbzCGTdXbEhW7m3tGy4U3RYWGq7xvO3FCqAfZpsh8TyovK6BeX3NCxcXtGfjBcxrSjRl/exec";

fetch(sheetURL)
  .then(response => response.json())
  .then(news => {

    const newsContainer = document.getElementById("news-cards");

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
  });