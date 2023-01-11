import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import createPuzzle from "./fn";
import displayTable from "./table";
import printDiv from "./print";

function App() {
  const [itemCount, setItemCount] = useState(1);
  const [dimension, setDimension] = useState("");
  const [itemArray, setItemArray] = useState([]);
  const [itemsTable, setItemsTable] = useState([]);

  const changeItemArray = (val, ind) => {
    let valArr = [...itemArray];
    if (/^[A-Za-z]+$/.test(val)) {
      valArr[ind] = val;
      console.log(valArr, ind);
      setItemArray(valArr);
    }
  };

  const displayContents = () => {
    let arr = new Array(itemCount).fill(0);
    console.log(arr);
    let result = arr.map((_, i) => {
      return (
        <div className="row mb-2" key={`Cont${i}`}>
          <div className="col-sm-6">{`Item ${i + 1}`} </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              value={itemArray[i] ?? ""}
              onChange={(e) => changeItemArray(e.target.value, i)}
            />
          </div>
        </div>
      );
    });

    return result;
  };

  const crtPuzzle = () => {
    let result = createPuzzle(dimension, itemArray);
    console.log(result);
    setItemsTable(result);
  };

  const showTable = () => {
    if (!itemsTable || itemsTable.length === 0) return null;
    return displayTable(...itemsTable);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.apostolicfaithweca.org/themes/custom/afmweca_vbs4/logo.svg"
          alt="logo"
        />

        <div className="container">
          <div>
            <h1>Crossword Puzzle</h1>
          </div>
          <div>
            <div className="row mb-3">
              <div className="col-sm-6">Dimension </div>
              <div className="col-sm-6">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setDimension(e.target.value)}
                />
              </div>
            </div>
            {displayContents()}
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setItemCount(itemCount + 1)}
              >
                Add More +
              </button>
            </div>
          </div>
          <div className="col-sm-12 my-2">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block"
              onClick={() => crtPuzzle()}
            >
              Submit
            </button>
          </div>

          <div id="GFG">{showTable()}</div>
          {!(!itemsTable || itemsTable.length === 0) && (
            <button type="button" className="btn btn-danger" onClick={printDiv}>
              Print Out
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
