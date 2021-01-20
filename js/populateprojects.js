export default class PopulateProjects {
  constructor(element, projects) {
    this.element = element;
    this.projects = projects;
    this.setHeader();
    this.generateProjects();
    this.setFooter();
  }

  setHeader() {
    const header = document.createElement("header");

    // Section titles
    const title = document.createElement("h2");
    title.textContent = "Projects";
    header.appendChild(title);

    const subtitle = document.createElement("p");
    subtitle.textContent = "Filter By Tech";
    header.appendChild(subtitle);

    // Filter option buttons   
    const filterOptions = document.createElement("div");
    let combinedTags = this.projects.reduce((accArr, curArr) => accArr.concat(curArr.tags), []);
    combinedTags.sort();
    combinedTags.unshift("View All");
    combinedTags = new Set(combinedTags);
    combinedTags.forEach(tag => filterOptions.innerHTML += `<button>${tag}</button>`);
    header.appendChild(filterOptions);

    this.element.appendChild(header);
  }

  generateProjects() {
    this.projects.forEach(project => {
      // Create new project card
      const newCard = document.createElement("article");
      newCard.setAttribute("class", "card");
      newCard.setAttribute("data-tags", project.tags);

      // Set image and name
      newCard.innerHTML = `
        <img src="${project.thumbnail}" alt="project thumbnail">
        <h3>${project.name}</h3>
      `;

      // Set links
      let links = "";

      if (project.demo) {
        links = `<a href="${project.demo}" target="_blank">Demo</a>, `;
      } else {
        links = `<span class="no-link">demo</span>, `;
      }

      if (project.source) {
        links += `<a href="${project.source}" target="_blank">Source</a>`
      } else {
        links += `<span class="no-link">source</span>`;
      }
      
      newCard.innerHTML += `<div>${links}</div>`;

      // Set description with proper formatting
      project.description.forEach(paragraph => newCard.innerHTML += `<p>${paragraph}</p>`);

      // Add to DOM
      this.element.appendChild(newCard);
    });
  }

  setFooter() {
    const footer = document.createElement("p");
    footer.setAttribute("id", "to-top");
    footer.setAttribute("onclick", "document.documentElement.scrollTop=0");
    footer.textContent = "back to the top";
    this.element.appendChild(footer);
  }
}
