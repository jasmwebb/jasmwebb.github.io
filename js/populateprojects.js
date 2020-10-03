export default class PopulateProjects {
  constructor(element, projects) {
    this.element = element;
    this.projects = projects;
    this.setHeader();
    this.generateProjects();
    this.setFooter();
  }

  setHeader() {
    const header = document.createElement("h2")
    header.textContent = "Projects";
    this.element.appendChild(header);
  }

  generateProjects() {
    this.projects.forEach(project => {
      // Create new project card
      const newCard = document.createElement("div");
      newCard.setAttribute("class", "card");

      // Set image and name
      newCard.innerHTML = `
        <img src="${project.thumbnail}" alt="project thumbnail">
        <h3>${project.name}</h3>
      `;

      // Set description with proper formatting
      project.description.forEach(paragraph => {
        newCard.innerHTML += `<p>${paragraph}</p>`
      });

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
      
      newCard.innerHTML += `<div>[ ${links} ]</div>`;

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
