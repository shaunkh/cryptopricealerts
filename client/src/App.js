import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({prices: []});

  useEffect(() => {
    fetch("/prices")
      .then((res) =>  {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error fetching data from server", err);
      });
  }, []);

  return (
    <div>
      <h1>Cryptoasset Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.state.prices.map(p => (
              <tr key={p.currency}>
                <td>{p.currency}</td>
                <td>{p.price}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
