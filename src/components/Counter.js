import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  // estrae state.counter dallo store
  const counter = useSelector((state) => {
    return state.counter;
  });
  // estrae state.showCounter dallo store
  const show = useSelector((state) => {
    return state.showCounter;
  });

  const incrementHandler = () => {
    // dispatch di sola azione
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    // dispatch di azione + valore
    dispatch({
      type: "increase",
      amount: 10,
    });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const resetHandler = () => {
    dispatch({ type: "reset" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
