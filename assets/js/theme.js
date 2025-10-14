// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}


let setTheme = (theme) =>  {
  transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme-setting", theme);
  }
  else {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-theme-setting");
  }
  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};


let setHighlight = (theme) => {
  if (theme == "dark") {
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  } else {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  }
}


let setGiscusTheme = (theme) => {

  function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
  }

  sendMessage({
    setConfig: {
      theme: theme
    }
  });

}


let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}


let initTheme = (theme) => {
  if (theme == null || theme == 'null') {
    // Default to dark mode
    theme = 'dark';
  }

  setTheme(theme);
}


initTheme(localStorage.getItem("theme"));

// Add click event listener for the toggle button
document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");
    if (mode_toggle) {
        mode_toggle.addEventListener("click", function() {
            toggleTheme(localStorage.getItem("theme"));
        });
    }
});
