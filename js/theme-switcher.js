function calculateSettingAsThemeString(localStorageTheme) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

function initThemeSwitcher() {
  const localStorageTheme = localStorage.getItem("theme");
  setCurrentTheme(
    calculateSettingAsThemeString(localStorageTheme),
    localStorageTheme !== null
  );
}

function setCurrentTheme(theme, setTheme) {
  document.getElementById("switch").checked = theme === "dark";

  if (setTheme) {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
}

initThemeSwitcher();

window.addEventListener("load", () => {
  const button = document.getElementById("switch");

  button.addEventListener("click", () => {
    const localStorageTheme = document
      .querySelector("html")
      .getAttribute("data-theme");
    const newTheme =
      calculateSettingAsThemeString(localStorageTheme) === "dark"
        ? "light"
        : "dark";
    setCurrentTheme(newTheme, true);
  });
});
