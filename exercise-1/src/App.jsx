import React, { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [hidden, setHidden] = useState(false);

  function onSunClick() {
    setHidden(false);
    getTitle("SUN TIME");
  }

  function onRainClick() {
    setHidden(true);
    getTitle("RAIN TIME")
  }

  function getTitle(item) {
    document.getElementById("title").innerHTML = item;
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
  }

  return (
    <main className={hidden? "rainy":"sunny"}>
      <h1 id="title">SUN TIME</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
