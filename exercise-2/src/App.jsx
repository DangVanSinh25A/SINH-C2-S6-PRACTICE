import React, {useState } from "react";

function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [enter, setEnter] = useState("");
  
  

  /* You will need a function to handle a key pressed on the first input and update the state*/
  const handleEndterChange = (e) => {
    setEnter(e.target.value);
  };
  // function handleEndterChange(e){
  //   setEnter(e.target.value);
  // }
 
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input type="text" onClick={handleEndterChange}/>
      <p>
        <label>Here is the text in upper case</label>
        <input disabled value={enter.toUpperCase()}/>
      </p>
    </main>
  );
}

export default App;
