import TypeGreeting from "./greeting.js";
import PopulateProjects from "./projects.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Typed Greeting Animation
  const element = document.getElementById("type-greeting");
  const greetings = JSON.parse(element.getAttribute("data-greetings"));
  const wait = element.getAttribute("data-wait");

  // Projects
  const projects = document.getElementById("projects");

  new TypeGreeting(element, greetings, wait);
  new PopulateProjects();
}
