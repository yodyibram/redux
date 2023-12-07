import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrementWitchCheckingAction, increment } from "../../app/features/Counter/actions";

const Counter = () => {
    let count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>-</button>
             {count}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;