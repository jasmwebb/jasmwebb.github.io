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
      const newCard = document.createElement("div");
      newCard.setAttribute("class", "card");

      newCard.innerHTML = `
        <img src="${project.thumbnail}" alt="project thumbnail">
        <h3>${project.name}</h3>
      `;

      project.description.forEach(paragraph => {
        newCard.innerHTML += `<p>${paragraph}</p>`
      });

      newCard.innerHTML += `
        <div>
          [
          <a href="${project.demo}" target="_blank">Demo</a>,
          <a href="${project.source}" target="_blank">Source</a>
          ]
        </div>
      `;

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
