## Performance Optimization
>React project demonstrating the use of `useMemo` and `React.memo` for performance optimization.

* [Overview of useMemo and React.memo](#performance-optimization-overview)
* [Key Differences](#performance-optimization-key-differences)
* [Understanding Memoization](#performance-optimization-memoization)
* [Understanding Shallow Comparison](#performance-optimization-shallow-comparison)
* [Basic Syntax of useMemo](#performance-optimization-basic-syntax-of-usememo)
* [Basic Syntax of React.memo](#performance-optimization-basic-syntax-of-reactmemo)
* [Project Structure](#performance-optimization-project-structure)

### <a name="performance-optimization-overview">Overview</a>

#### useMemo
The `useMemo` React Hook is used to optimize performance by **memoizing** ([caching](#caching)) the result of a function or computation, so that it is only recalculated when its dependencies change. This prevents expensive computations from running unnecessarily during every render.

> [!TIP]
> Check out the complete React [documentation](https://react.dev/reference/react/useMemo) on the built-in `useMemo` hook as reference.

#### React.memo
In React, `React.memo` is a **higher-order component (HOC)** provided by React, specifically designed to automatically memoize functional components. When a component is wrapped with `React.memo`, it will re-render only if its props have changed[^1].

`React.memo` focuses on optimizing component rendering, while `useMemo` optimizes specific calculations within a component. 

### <a name="performance-optimization-key-differences">Key Differences</a>
| Feature           | `React.memo`          | `useMemo`         |
| ----------------- | --------------------- | ----------------- |
| Functionality     | Prevents a component from re-rendering based on its props. | Caches the result of a function call based on its dependencies. |
| Usage             | Used to wrap a functional component. | Called inside a functional component to memoize a specific calculation. |
| Comparison        | Performs a [shallow comparison](#performance-optimization-shallow-comparison) of props by default to determine if a re-render is needed. | Explicitly defines its dependencies in an array to control when the calculation is re-run. |

**Use Case for Each:**

* Use `React.memo` when you have a component that is rendered frequently and its rendering logic is relatively simple but depends heavily on its props. 
* Use `useMemo` when you have a computationally expensive calculation within a component that needs to be cached and only re-calculated when its dependencies change. 

### <a name="performance-optimization-memoization">Understanding Memoization</a>

In React applications, memoization helps avoid redundant rendering of components, ultimately leading to a smoother user experience.

Memoization is a technique used to optimize the performance of functions by **[caching](#caching)** the results of expensive function calls and reusing them when the same inputs occur again[^1].

<a name="caching">Caching</a> is a technique that allows us to store a copy of a given resource and serve it back when it is requested[^2].

### <a name="performance-optimization-shallow-comparison">Understanding Shallow Comparison</a>

Shallow comparison refers to a comparison of **references only**, not the actual content of the objects. If two variables reference the same object in memory, the shallow comparison will consider them equal. It does not go into nested objects or arrays to check for equality[^1].

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

### <a name="performance-optimization-project-structure">Project Structure</a>
```
usememo-demo/
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

[^1]: [Memo vs. useMemo: When to use each for better React performance?](https://blog.saeloun.com/2024/02/15/memo-vs-usememo-when-to-use-each-for-better-react-performance/)
[^2]: [How to get complete cache data in ReactJS?](https://www.geeksforgeeks.org/how-to-get-complete-cache-data-in-reactjs/)

---