function swapTheme() {
    const appDiv = document.getElementById("app");
    const button = document.getElementById("swap");
  
    // Toggle between "day" and "night" class on the main div
    if (appDiv.className === "day") {
      appDiv.className = "night";
      button.className = "button_night";
    } else {
      appDiv.className = "day";
      button.className = "button_day";
    }
  }
  