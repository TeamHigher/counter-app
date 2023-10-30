import useCounter from "../Custom-Hooks/useCounter";
import { Link } from "react-router-dom";

const CounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const countColor = count > 0 ? "green" : count < 0 ? "orangered" : "";

  return (
    <div className="container">
      <div className="counter">
        <h1>Custom Counter App</h1>
        <input
          type="text"
          /*value={inputValue}*/
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          className="input"
          placeholder="set count value"
        />

        <p className={countColor}>{count}</p>
        <div className="buttons">
          <button
            onClick={decrement}
            id="sub"
            className="fas fa-minus"
          ></button>
          <button onClick={reset} id="reset">
            Reset
          </button>
          <button onClick={increment} id="add" className="fas fa-add"></button>
          <div className="errorLink">
            <ul>
              <li>
                <Link to="/error">Page not found Test</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
