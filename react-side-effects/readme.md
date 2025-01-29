## React Side Effects
>A look at managing side effects with the `useEffect` hook.

* [Side Effects Overview](#side-effects-overview)
* [Understanding Component Lifecycle](#side-effects-component-lifecycle)
* [Timer Example With useEffect](#side-effects-example)

---

### <a name="side-effects-overview">Side Effects Overview</a>

**Overview:**

`useEffect` is a built-in React Hook that allows you to perform side effects in functional components. 

It runs after the component renders and can be used for tasks such as:
* Fetching data from an API
* Subscribing to events
* Updating the DOM
* Managing timers

**Syntax:**
```js
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```
`useEffect` takes two arguments:
* `() => {}`: The first argument is a function that runs the effect.
* `[dependencies]`: The second argument is an array of dependencies that controls when the effect runs. This can be:
  * `[]` (empty array) - Runs only once after the first render.
  * No dependency array - Runs after every render.
  * `[someValue]` → Runs when `someValue` changes.

---

### <a name="side-effects-component-lifecycle">Understanding Component Lifecycle</a>

In React, you often here the terms **mounts** or **unmounts** with relation to components. These refer to the lifecycle of a component - when it is added (mount) to or removed (unmount) from the **DOM (Document Object Model)**.

**A Closer Look at "Mounting":**

When a component mounts, it means:
* The component is being **created and inserted** into the DOM.
* React renders the component for the first time.
* The `useEffect` hook, with an empty dependency array, runs once.

Examples of component mounting include:
* A component that is added to the UI.
* A component conditionally rendered based on state.
* A user navigates to a route where the component appears.

**A Closer Look at "Unmounting":**

When a component unmounts, it means:
* The component is **removed** from the DOM.
* Any side effects (event listeners, timers, etc.) should be cleaned up to prevent memory leaks.
* The cleanup function in `useEffect` runs before unmounting.

Examples of component unmounting include:
* The user navigates away from a route containing the component.
* The component is conditionally removed.
* A parent component re-renders, causing the child component to be removed.

**Example Case of "Mounting" and "Unmounting":**
```js
useEffect(() => {
    console.log('The "Mount" component has been mounted!');

    return () => {
        console.log('The "Mount" component has been unmounted!');
    };
}, []); // Empty dependency array -> Runs once on mount
```

---

### <a name="side-effects-example">Example With useEffect</a>

**The `Counter.js` File:**
```js
import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // Effect 1: Start a time when the component mounts
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        // Cleanup function to stop the interval when component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []); // Runs only once when the component mounts

    // Effect 2: Update the document title whenever count changes
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Runs only when count changes

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
```

**The `App.js` File:**
```js
import React, { useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  // Effect 3: Clear any initial console logs when the component mounts
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div>
      <h1>React Side Effects - Timer Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

> [!TIP]
> Check out the complete React [documentation](https://react.dev/reference/react/useEffect) on the built-in `useEffect` hook.

<kbd> <br> [Back to Top](#react-side-effects) <br> </kbd>
---