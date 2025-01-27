import { useState } from 'react';

function StateManagementEx() {
    const [count, setCount] = useState(0);

    function addHandler() {
        setCount(count + 1);
    }

    function subtractHandler() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter Example</h2>
            <p>Current Count: {count}</p>
            <button onClick={addHandler}>Add 1</button>
            <button onClick={subtractHandler}>Subtract 1</button>
        </div>
    )

}
export default StateManagementEx;