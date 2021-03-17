const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const body = document.body;
const modeButton = document.getElementById("mode-button");
const mode = localStorage.getItem("mode");

if (!mode) {
  // User's first visit, no mode saved, go by system settings
  const userPreference = userPrefersDark ? "dark" : "light";
  body.classList.add(userPreference);
} else if (mode === "dark") {
  body.classList.add("dark");
} else if (mode === "light") {
  body.classList.add("light");
}

modeButton.onclick = () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  localStorage.setItem("mode", body.classList.value);
};
