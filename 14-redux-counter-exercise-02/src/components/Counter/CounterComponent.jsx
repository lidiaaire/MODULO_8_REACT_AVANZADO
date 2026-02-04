import { useDispatch, useSelector } from "react-redux";
import { increment } from "./CounterActions";

export default function CounterComponent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Incrementar </button>
    </div>
  );
}
