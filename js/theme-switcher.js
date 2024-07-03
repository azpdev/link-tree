function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

function initThemeSwitcher() {
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
  });
  setCurrentTheme(currentThemeSetting);
}

function setCurrentTheme(theme) {
  document.querySelector("html").setAttribute("data-theme", theme);
  document.getElementById("switch").checked = theme === "dark";

  localStorage.setItem("theme", theme);
}

window.addEventListener("load", () => {
  const button = document.getElementById("switch");

  initThemeSwitcher();

  button.addEventListener("click", () => {
    let currentThemeSetting = document
      .querySelector("html")
      .getAttribute("data-theme");
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
  });
});
