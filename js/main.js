import TypeGreeting from "./greeting.js";
import projectsObjs from "./projects.js";
import PopulateProjects from "./populateprojects.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Typed Greeting Animation
  const greetingElement = document.getElementById("type-greeting");
  const greetings = JSON.parse(greetingElement.getAttribute("data-greetings"));
  const wait = greetingElement.getAttribute("data-wait");
  new TypeGreeting(greetingElement, greetings, wait);


  // Projects
  const projectsElement = document.getElementById("projects");
  new PopulateProjects(projectsElement, projectsObjs);

  // Filter Projects
  const projectCards = Array.from(projectsElement.getElementsByTagName("article"));
  const filterOptions = Array.from(projectsElement.getElementsByTagName("button"));
  filterOptions.forEach(button => button.addEventListener("click", event => {
    const selectedTag = event.target.innerText;
  
    // Remove hidden class from any cards that have it
    try {
      projectCards.forEach(card => card.classList.remove("hidden"));
    } catch (error) {}
  
    if (selectedTag === "View All") return false;
  
    const cardsToHide = projectCards.filter(card => !card.getAttribute("data-tags").split(",").includes(selectedTag));
    cardsToHide.forEach(card => card.classList.add("hidden"));
  }));
}
