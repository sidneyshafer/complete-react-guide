## Performance Optimization
>React project demonstrating the use of `useMemo` and `React.memo`, as well as `useCallback` for performance optimization.

* [Default Rendering Behavior](#performance-optimization-default-behavior)
* [Overview of Optimizations](#performance-optimization-overview)
* [Key Differences](#performance-optimization-key-differences)
* [Understanding Memoization](#performance-optimization-memoization)
* [Understanding Shallow Comparison](#performance-optimization-shallow-comparison)
* [Basic Syntax of useMemo](#performance-optimization-basic-syntax-of-usememo)
* [Basic Syntax of useCallback](#performance-optimization-basic-syntax-of-usecallback)
* [Basic Syntax of React.memo](#performance-optimization-basic-syntax-of-reactmemo)
* [Changes to Default Rendering Behavior](#performance-optimization-default-behavior-changes)
* [Project Structure](#performance-optimization-project-structure)

### <a name="performance-optimization-default-behavior">Default Rendering Behavior</a>

By default, React will re-render a component when:
1. **Its state changes** → When you call `setState`, the component and its children re-render.
2. **Its props change** → If a parent component passes new props, the child component re-renders.
3. **Its parent re-renders** → If a parent component re-renders (even without changing props), React re-renders its children.

This default re-rendering behavior ensures that the UI stays in sync with the application state, but this often leads to **unnecessary re-renders that <ins>negatively impact performance</ins>**.

That is where `useMemo`, `useCallback`, and `React.memo` come into place. These optimizations, provided by React, help reduce unnecessary re-renders and improve application performance.

### <a name="performance-optimization-overview">Overview of Optimizations</a>

#### `useMemo`
The `useMemo` React Hook is used to optimize performance by **memoizing** ([caching](#caching)) the result of a function or computation, so that it is only recalculated when its dependencies change. This prevents expensive computations from running unnecessarily during every render.

> [!TIP]
> Check out the complete React [documentation](https://react.dev/reference/react/useMemo) on the built-in `useMemo` hook.

#### `React.memo`
In React, `React.memo` is a **higher-order component (HOC)** provided by React, specifically designed to automatically memoize functional components. When a component is wrapped with `React.memo`, it will re-render only if its props have changed.

#### `useCallback`
`useCallback` is a React Hook used to memoize callback functions. It ensures that a function reference remains the same across renders unless its dependencies change. 

This optimization is useful when passing callbacks to child components to prevent re-creations of functions during component re-renders.

If you pass a new function reference (even with the same logic) as a prop, `React.memo` will trigger a re-render. `useCallback` ensures that the function reference stays the same across renders, **working effectively with `React.memo`**.

> [!TIP]
> Check out the complete React [documentation](https://react.dev/reference/react/useCallback) on the built-in `useCallback` hook.

### <a name="performance-optimization-key-differences">Key Differences</a>
| Feature           | `React.memo`          | `useMemo`         | `useCallback`     |
| ----------------- | --------------------- | ----------------- | ----------------- |
| Functionality     | Prevents a component from re-rendering based on its props. | Caches the result of a function call based on its dependencies. | Caches a function definition so it does not get re-created on every render. |
| Usage             | Used to wrap a functional component. | Called inside a functional component to memoize a specific calculation. | Wraps a function inside a functional component. | 
| Comparison        | Performs a [shallow comparison](#performance-optimization-shallow-comparison) of props by default to determine if a re-render is needed. | Explicitly defines dependencies in an array to control when the calculation is re-run. | Explicitly defines dependencies in an array to determine when the function should be re-created. |

`React.memo` focuses on optimizing component rendering, while `useMemo` optimizes specific calculations within a component. 

**Use Case for Each:**

* Use `React.memo` when you have a component that is rendered frequently and its rendering logic is relatively simple but depends heavily on its props. 
* Use `useMemo` when you have a computationally expensive calculation within a component that needs to be cached and only re-calculated when its dependencies change. 
* Use `useCallback`: 
    * When functions are passed as props, preventing unnecessary child re-renders.
    * When passing functions as props to child components wrapped with `React.memo`.
    * When functions are used as dependencies in `useEffect` or `useMemo` to avoid triggering unintended re-runs.

### <a name="performance-optimization-memoization">Understanding Memoization</a>

In React applications, **memoization** helps avoid redundant rendering of components, ultimately leading to a smoother user experience.

Memoization is a technique used to optimize the performance of functions by **caching** the results of expensive function calls and reusing them when the same inputs occur again.

**<a name="caching">Caching</a> is a technique that allows us to store a copy of a given resource and serve it back when it is requested.**

### <a name="performance-optimization-shallow-comparison">Understanding Shallow Comparison</a>

Shallow comparison refers to a comparison of **references only**, not the actual content of the objects. If two variables reference the same object in memory, the shallow comparison will consider them equal. It does not go into nested objects or arrays to check for equality.

```js
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1; // Points to the same memory reference as array1

console.log(array1 === array2); // false (different references)
console.log(array1 === array3); // true (same reference)
```

### <a name="performance-optimization-basic-syntax-of-usememo">Basic Syntax of useMemo</a>
```js
const cachedValue = useMemo(calculateValue, dependencies)
```
* `calculateValue`: The function calculating the value that you want to cache.
    * React will call this function during the initial render. 
    * On next renders, React will return the same value if the `dependencies` have not changed.
* `dependencies`:
    * List of all **reactive** values referenced inside of the calculateValue code. 
    * This include props, state, and all the variables and functions declared directly inside your component body.

### <a name="performance-optimization-basic-syntax-of-usecallback">Basic Syntax of useCallback</a>
```js
const memoizedCallback = useCallback(
  () => {
    // Callback Function (Your callback logic here)
  },
  [dependencies] // Dependency Array (function recreation if these change)
);
```
* Callback Function - The function you want to memoize.
* Dependency Array - Determines when the memoized function should be recreated.
* A memoized version of the function that only changes if the dependencies change will be returned.

### <a name="performance-optimization-basic-syntax-of-reactmemo">Basic Syntax of React.memo</a>

There are multiple ways to use `React.memo`, here are a few examples:

**Example 1:**

The `React.memo` function is used to wrap the component and then export:
```js
import React from 'react';

const ComponentOne = (props) => {
   /* component code */
};

export default React.memo(ComponentOne);
```

**Example 2:**

The `memo()` function is used to wrap a new variable and then store the memoized component to be exported:
```js
import { memo } from "react";

const ComponentTwo = (props) => {  
  /* render using props */  
};

export const MemoComponent = memo(ComponentTwo);
```

**Example 3:**

The `memo()` function is used to wrap the entire component:
```js
import { memo } from "react";

const ComponentThree = memo((props) => {  
   /* component code */  
});

export default ComponentThree;
```

### <a name="performance-optimization-default-behavior-changes">Changes to Default Rendering Behavior</a>
| Feature               | Default Behavior              | `React.memo`              | `useMemo`             | `useCallback`             |
| --------------------- | ----------------------------- | ------------------------- | --------------------- | ------------------------- |
| State Change          | Component always re-renders   | No effect                 | No effect             | No effect                 |
| Props Are the Same    | Component re-renders          | :white_check_mark: Prevents re-render | No effect | No effect                 |
| Parent Re-renders     | Child re-renders              | :white_check_mark: Prevents re-render | No effect | No effect                 |
| Expensive Computations | Always recalculates          | No effect | :white_check_mark: Prevents recalculation | No effect             |
| Functions as Props    | New function created on every render | No effect | No effect | :white_check_mark: Prevents re-creation        |

### <a name="performance-optimization-project-structure">Project Structure</a>
```
performance-optimization/
├── public/
    ├── index.html
    ├── favicon.ico
    ├── manifest.json
    └── robots.txt
├── src/
    ├── components/
    |   ├── Demo/
    |   |   ├── DemoList.js
    |   |   ├── DemoList.module.css
    |   ├── UI/
    |   |   ├── Button/
    |   |   |   ├── Button.js
    |   |   |   ├── Button.module.css
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── readme.md
```

<kbd> <br> [Back to Top](#performance-optimization) <br> </kbd>
---