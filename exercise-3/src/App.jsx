import React,{useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [ab, setAB] = useState(0);

  /* You will need some function to handle the key pressed and button events */ 
  const onA = () => {
    console.log('The "A" key was released!');
  };

  const onB = () => {
    console.log('The "A" key was released!');
  };
  const onAB = () => {
    console.log('The "A" key was released!');
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="number" onKeyUp={onA} onChange={(e) => setA(e.target.value)}
/>

      <label>B =</label>
      <input type="number" onKeyUp={onB}  onChange={(e) => setB(e.target.value)}/>

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={ab}/>
      <button onClick={(e) => setAB(a+b)}>Compute</button>
    </main>
  );
}

export default App;
