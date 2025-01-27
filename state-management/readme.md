## State Management
>First look at using the built-in React hook `useState` for state management.

* [State Management Overview](#state-management-overview)
* [Example With useState](#example-with-usestate)

### State Management Overview

**Overview:**

The `useState` hook in React is used to manage and track state in **functional components**.

This hook provides a way to store values that can change over time and trigger re-renders when those values change.

**Syntax:**
```js
const [state, setState] = useState(initialValue);
```
* `state`: The current value of the state.
* `setState`: A function to update the state value.
* `initialValue`: The initial value of the state.

### Example With `useState`

**The `StateManagementEx.js` File:**
```js
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
```
* `useState(0)` initializes count variable set to `0`.
* The `setCount` function is used to update the `count` state and triggers a re-render to reflect the updated value.
* `addHandler` is passed to the `onClick` event handler and *increases* the count by 1 when the "Add 1" button is clicked.
* `subtractHandler` is passed to the `onClick` event handler and *decreases* the count by 1 when the "Subtract 1" button is clicked.
  * The `onClick` event handler allows execution of a function when a user clicks on the element.

---

**The `App.js` File:**
```js
import StateManagementEx from "./components/StateManagementEx";

function App() {
  return (
    <div>
      <h1>State Management</h1>
      <StateManagementEx />
    </div>
  );
}

export default App;
```
* Renders the `StateManagementEx` component.
---
> [!TIP]
> For a [complete reference list](https://react.dev/reference/react/hooks) of built-in React hooks.

<kbd> <br> [Back to Top](#state-management) <br> </kbd>