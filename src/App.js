import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [itemCount, setItemCount] = useState(1);
  const [dimension, setDimension] = useState("");
  const [itemArray, setItemArray] = useState([]);

  const changeItemArray = (val, ind) => {
    let valArr = [...itemArray];
    valArr[ind] = val;
    console.log(valArr, ind);
    setItemArray(valArr);
  };

  const displayContents = () => {
    let arr = new Array(itemCount).fill(0);
    console.log(arr);
    let result = arr.map((_, i) => {
      return (
        <div className="dflex-container" key={`Cont${i}`}>
          <div className="alignLeft">{`Item ${i + 1}`} </div>
          <div className="alignRight">
            <input
              type="text"
              value={itemArray[i] ?? ""}
              onChange={(e) => changeItemArray(e.target.value, i)}
            />
          </div>
        </div>
      );
    });

    return result;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div>Crossword Puzzle</div>
          <div>
            <div className="dflex-container">
              <div className="alignLeft">Dimension </div>
              <div className="alignRight">
                <input
                  type="number"
                  onChange={(e) => setDimension(e.target.value)}
                />
              </div>
            </div>
            {displayContents()}
            <button type="button" onClick={() => setItemCount(itemCount + 1)}>
              Add More +
            </button>
          </div>

          <button type="button" onClick={() => {}}>
            Submit
          </button>
          <div>Print Out</div>
        </div>
      </header>
    </div>
  );
}

export default App;
