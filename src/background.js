const colors = [
    "#FF0000",
    "#FFBB00",
    "#1DDB16",
    "#0054FF",
    "#8041D9",
    "#BDBDBD",
    "#FFB2D9",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b"
  ];

  //const btn = document.querySelector("#login-form input[type='submit']");

  function backgroundColors() {
    const a = colors[Math.floor(Math.random() * colors.length)];
    const b = colors[Math.floor(Math.random() * colors.length)];
  
   if (a === b) {
      return backgroundColors();
    }

    document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
  }
   
  
backgroundColors();   