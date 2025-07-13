// Theme toggle functionality - lightweight version
// Theme application happens immediately in <head>, this only handles toggling

function setCurrentTheme(theme) {
  document.querySelector("html").setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const switchElement = document.getElementById("switch");
  if (switchElement) {
    switchElement.checked = theme === "dark";
  }
}

function themeToggleSetup() {
  const button = document.getElementById("switch");
  if (!button) return;

  // Set initial switch state based on current theme
  const currentTheme = document.querySelector("html").getAttribute("data-theme");
  button.checked = currentTheme === "dark";

  // Handle toggle clicks
  button.addEventListener("click", () => {
    const currentTheme = document.querySelector("html").getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
  });
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", themeToggleSetup);
} else {
  themeToggleSetup();
}
