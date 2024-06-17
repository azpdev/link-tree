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

function setCurrentTheme(theme) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

window.addEventListener("load", () => {
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
  });

  setCurrentTheme(currentThemeSetting);

  const button = document.querySelector("[data-theme-toggle]");

  button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    const newCta =
      newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
    button.innerText = newCta;
    button.setAttribute("aria-label", newCta);
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
  });
});
