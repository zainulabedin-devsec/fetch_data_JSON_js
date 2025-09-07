console.log("health_articles.js is running...");

fetch("./health_articles.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    if (!data.articles || !Array.isArray(data.articles)) {
      console.error("Invalid JSON format or missing 'articles' key.");
      return;
    }

    const articlesDiv = document.getElementById("articles");

    data.articles.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("article");

      const title = document.createElement("h2");
      title.textContent = article.title;

      const description = document.createElement("p");
      description.textContent = article.description;

      const waysHeader = document.createElement("h3");
      waysHeader.textContent = "Ways to Achieve:";

      const waysList = document.createElement("ul");
      article.ways_to_achieve.forEach(way => {
        const li = document.createElement("li");
        li.textContent = way;
        waysList.appendChild(li);
      });

      const benefitsHeader = document.createElement("h3");
      benefitsHeader.textContent = "Benefits:";

      const benefitsList = document.createElement("ul");
      article.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
  })
  .catch(error => {
    console.error("Error loading articles:", error);
  });
