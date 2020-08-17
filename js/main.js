import TypeGreeting from "./greeting.js";
import PopulateProjects from "./projects.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Typed Greeting Animation
  const element = document.getElementsByClassName("type-greeting")[0];
  const greetings = JSON.parse(element.getAttribute("data-greetings"));
  const wait = element.getAttribute("data-wait");

  // Projects
  const projects = document.getElementById("projects");

  new TypeGreeting(element, greetings, wait);
  new PopulateProjects();
}
