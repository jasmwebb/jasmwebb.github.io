import TypeGreeting from "./greeting.js";
import projectsObjs from "./projects.js";
import PopulateProjects from "./populateprojects.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Typed Greeting Animation
  const greetingElement = document.getElementById("type-greeting");
  const greetings = JSON.parse(greetingElement.getAttribute("data-greetings"));
  const wait = greetingElement.getAttribute("data-wait");

  // Projects
  const projectsElement = document.getElementById("projects");

  new TypeGreeting(greetingElement, greetings, wait);
  new PopulateProjects(projectsElement, projectsObjs);
}
