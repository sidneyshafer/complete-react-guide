>Complete guide to building applications in React.

# Table of Contents
* **[Introduction to React](#introduction-to-react)**
* **[Creating a New React App](#creating-a-new-react-app)**
* **[React App Usage](#react-app-usage)**
* **[Base React App](#base-react-app)**
* **[React Component Types](#react-component-types)**
* **[Introduction Project](#introduction-project)**
* **[CSS Modules for Styling](#css-modules-for-styling)**
* **[Overview of React Hooks](#overview-of-react-hooks)**
* **[State Management](#state-management)**
* **[React Side Effects](#react-side-effects)**
* **[Performance Optimization](#performance-optimization)**
* **[Making HTTP Requests](#making-http-requests)**
* **[All React Demo Projects](#all-react-demo-projects)**

---

## Introduction to React

**[React](https://react.dev/)** is a JavaScript library for building user interfaces. It is developed and maintained by **[Meta (Facebook)](https://github.com/facebook)** and is widely used for creating fast, scalable, and interactive web applications.

**Key Features of React**

:white_check_mark: **Component-Based Architecture** – Improve maintainability with reusable components.

:white_check_mark: **Declarative UI** – Describe how the UI should look, and React updates it efficiently.

:white_check_mark: **Virtual DOM** – Optimizes performance by updating only necessary parts of the UI, which allows for fast rendering.

:white_check_mark: **Unidirectional Data Flow** – Data flows from parent to child components, ensuring predictable state management.

:white_check_mark: **Hooks & Functional Components** – Simplifies state and side-effects management without needing class components.

:white_check_mark: **Strong Ecosystem** – Works well with libraries like **React Router**, **Redux**, and more, with **[strong community support](https://github.com/reactjs)** and widespread adoption.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## Creating a New React App
>Instructions for creating a new React app using **[Node Package Manager (`npm`)](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)**.

* [Overview of Node Package Manager](#creating-new-project-npm-overview)
* [Environment Setup](#creating-new-project-setup)
* [Project Structure](#creating-new-project-structure)
* [File Overview](#creating-new-project-file-overview)

> [!NOTE]
> All examples in this section can be found in :file_folder: [new-react-app](/new-react-app)

### <a name="creating-new-project-npm-overview">Overview of Node Package Manager</a>

Node Package Manager (`npm`) is a package manager for JavaScript that helps developers install, manage, and share dependencies. 

It is the default package manager for **[Node.js](https://nodejs.org/en)** and is widely used in web development.

This includes React applications which rely on various dependencies (`react` and `react-dom`) and other libraries for state management, routing, UI components, and more. `npm` helps in managing these dependencies efficiently.

In a React environment managed by `npm`, the `node_modules` directory contains all installed `npm` packages used by the app.

### <a name="creating-new-project-setup">Environment Setup</a>

The `npm` command for creating a new React app is:
```
npx create-react-app my-new-app
```
**`npx`**
* Package runner that comes with npm 5.2+ and higher.
* Runs the `create-react-app` package without installing it globally.

**`create-react-app`**
* Tool provided by the React team to quickly scaffold a React project with a pre-configured setup.

**`my-new-app`**
* Name of the new project folder. Replace `my-new-app` with desired project name.

### <a name="creating-new-project-structure">Project Structure</a>
```
my-new-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

### <a name="creating-new-project-file-overview">File Overview</a>
**`public`/**

* Contains static assets and the root HTML file for the app.
    * **`index.html`**
        * Main HTML file where the React app is mounted.
        * The `<div id="root"></div>` element acts as the entry point for React to inject the app.
        * You can add meta tags, external scripts, or other HTML configurations here.
    * **`logo192.png`** *and* **`logo512.png`**
        * Logos displaying the specific React symbol (these are usually discarded).
    * **`favicon.ico`** *and* **`manifest.json`**
        * Used to provide metadata for the app.
        * The `favicon` is used as the small icon displayed in a browser tab.
    * **`robots.txt`**
        * Tells search engine crawlers which URLs the crawler can access on your site.
> [!TIP]
> Check out the project [documentation](/robots.txt.md) for information on the use of `robots.txt`.

**`src`/**

* Contains all the main application logic and components.
    * **`index.js`**
        * Entry point of the React app.
        * Renders the `<App />` component into the DOM root element.
    * **`index.css`**
        * Global CSS styles applied across the app.
        * Imported into the `index.js` file: `import './index.css';`.
    * **`App.js`**
        * The root React component.
        * Defines the main structure of the app by combining child components.
    * **`App.css`**
        * Styles specific to the `App.js` component.
        * Used in `App.js` component with the `import` statement: `import './App.css';`.
    * **`App.test.js`**
        * Contains test cases for the App component using tools like Jest or React Testing Library.
    * **`reportWebVitals.js`**
        * Used to measure performance metrics of the app.
    * **`setupTests.js`**
        * Allows configuration of testing environment before any tests are run.
        * Commonly used with testing libraries like Jest and React Testing Library.

**`package.json`**

* Contains metadata about the app and its dependencies.

**`.gitignore`**

* Configuration file that specifies which files and directories Git should ignore in version control. 
* These often include `node_modules`, `.DS_Store`, production files, etc.

**`README.md`**

* A markdown document that provides essential information about the project. 
* Typically the first thing users or collaborators see when they visit the repository on platforms like GitHub.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## React App Usage

Usage for setting up, installing, and managing the React app environment and dependencies is outlined in the React application usage [documentation](/react.usage.md). 

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## Base React App
>React application used as the base structure for all projects in this guide.

* [File Structure](#base-app-file-structure)
* [Code Breakdown](#base-app-code-breakdown)

> [!NOTE]
> All examples in this section can be found in :file_folder: [base-react-app](/base-react-app)

### <a name="base-app-file-structure">File Structure</a>
```
base-react-app/
├── public/
    ├── index.html
    ├── favicon.ico
    ├── manifest.json
    └── robots.txt
├── src/
    ├── assets/
    |   ├── images/
    |   |   ├── basic.jpg
    ├── components/
    |   ├── UI/
    |   |   ├── Card.css
    |   |   ├── Card.js
    |   ├── Footer.css
    |   ├── Footer.js
    |   ├── Header.css
    |   ├── Header.js
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── readme.md
```

### <a name="base-app-code-breakdown">Code Breakdown</a>

**The `index.js` file:**
```js
// import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
`// import React from 'react';`
* Imports the core React library, which is needed to use JSX (JavaScript XML) and create React components.
* Starting from **release 17**, however, <ins>you no longer need this statement</ins>.

`import ReactDOM from 'react-dom/client';`
* `ReactDOM` is a library that interacts with the DOM to render React components.
* `react-dom/client` is a new way (**starting from React 18**) to manage rendering in React apps, replacing `ReactDOM.render`.

`import './index.css';`
* Imports the global CSS file for the app.

`import App from './App';`
* Imports the `App` component from `App.js`, which serves as the root component of the application. 
* The `App` component is typically where the main structure and logic of the app reside.

`const root = ReactDOM.createRoot(document.getElementById('root'));`
* This selects the root DOM element with the `id="root"` (defined in `public/index.html`) and creates a React root using `ReactDOM.createRoot`.
* The `root` serves as the entry point for the React application, allowing React to manage the DOM within this element.
* In the `index.html` file, this is the target DOM element where the entire React app will be mounted:
    ```html
    <div id="root"></div>
    ```

`root.render(<App />);`
* Renders the `App` component inside the `root` element in the DOM.
* The `<App />` syntax is JSX, representing a React component.

The summary, the `index.js` component:
1. Sets up the environment.
2. Renders the top-level `App` component into the `root` DOM element.

---
**The `App.js` file:**
```js
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
```
`function App()`
* Defines a **functional component** called `App`.
* A functional component is one of the simplest ways to define a React component. It is essentially a JavaScript function that returns JSX (HTML-like syntax).

`return ( ... )`
* The `return` statement specifies what the `App` component renders on the screen.
* In this case, it returns a `<div>` element containing an `<h2>` element.

`<div>` and `<h2>`
* These are **JSX elements** that look similar to HTML but are actually JavaScript objects under the hood.
* JSX allows you to write markup directly within your JavaScript code, which is then transformed into React elements during compilation.

`export default App;`
* This exports the `App` component as the default export of the file.
* Allows other files to import `App` (in `index.js` as import `App` from `'./App';`) and use it in the application.
* In a larger app, the `App` component would usually serve as the container for other components, managing and rendering their content.

In summary, the `App.js` component:
1. Defines a simple functional React component.
2. Renders an HTML structure using JSX.
3. Is exported for use as the root component of the app.

> [!TIP]
> Check out the React [app usage documentation](/react.usage.md) for information on basic app usage in this project.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## React Component Types

>A Look at function and class component definitions.

* [Function Components](#function-components)
* [Class Components](#class-components)
* [Comparison of Components](#comparison-of-components)

> [!NOTE]
> All examples in this section can be found in :file_folder: [function-class-components](/function-class-components)

### Function Components

**Overview:**

Function components are the most common component type used in modern React development.

Functional components are often referred to as *stateless components* because they did not have built-in state management before React Hooks were introduced.

With the introduction of React Hooks, however, functional components can now manage state.

Functional components, at their core, are JavaScript functions that accept props and return **JSX**, which is a syntax extension that allows you to write HTML-like structures within JavaScript.

**Example:**
```js
function MyFunctionalComponent(props) {
    return (
      <div>
        <h2>Hello, Welcome to my Functional Component!</h2>
        <p>{props.text}</p>
      </div>
    );
  }
  
export default MyFunctionalComponent;
```
* Defines a functional component using the `function` keyword.
* Accepts `props` for any data from the parent component that uses it (access `props.text` in this case).
* The `export default` statement makes this component available for import in other files of the project.

---
### Class Components

**Overview:**

Class components are the "traditional" way of creating React components, emphasizing the used of ES6 class definitions.

React class components extend the `React.Component` class and provide methods for managing state, lifecycle events, and more.

They are becoming less common in favor of function components and hooks, but can still be useful in certain situations.

**Example:**
```js
import React, { Component } from 'react';

// Alternatively, `extends React.Component` with only importing `React`
class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hello, Welcome to my Class Component!</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default MyClassComponent;
```
* The component is defined as a class that extends `React.Component`.
* `this.props` is used to access the `props` passed to the component from the `App` component.
* The `render()` method is required in class components to return the JSX to be rendered.

### Comparison of Components
| Feature           | Class Components                       | Function Components |
| ----------------- | -------------------------------------- | ------------------- |
| Syntax            | ES6 classes                            | Functions           |
| State Management  | `this.state` and `this.setState()`     | `useState` Hook     |
| Lifecycle Methods | Separate methods (`componentDidMount`) | `useEffect` Hook    |
| Code Complexity   | More verbose                           | Simpler and concise |
| Performance       | Slightly heavier                       | Lightweight         |

**Functional components** are the modern standard, and the preferred way for writing React components. They are lightweight, easy to understand, and powerful when combined with React Hooks.

**Class components** are now less common but remain a valuable part of React's history and are still widely used in older React applications.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## Introduction Project
>Intro to getting started with React apps - a simple first project.

* [File Structure](#introduction-file-structure)
* [Full Code Breakdown](#introduction-code-breakdown)

> [!NOTE]
> All examples in this section can be found in :file_folder: [introduction-project](/introduction-project)

```
introduction-project/
├── public/
    ├── index.html
    ├── favicon.ico
    ├── manifest.json
    └── robots.txt
├── src/
    ├── assets/
    |   ├── images/
    |   |   ├── ui-1.png
    |   |   ├── ui-2.png
    ├── components/
    |   ├── Backdrop.js
    |   ├── Modal.js
    |   ├── Todo.js
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── readme.md
```

### <a name="introduction-code-breakdown">Full Code Breakdown</a>

> [!NOTE]
> This section does not cover all specific code blocks in `index.js` and `App.js`. Check out the :file_folder: [base-react-app](/base-react-app) for information on code not covered in this section.

---
**The `Backdrop.js` File:**
```js
function Backdrop(props) {
  return <div className='backdrop' onClick={props.onClick} />;
}

export default Backdrop;
```
**Key Points:**
* This component renders a `div` with a class of `backdrop`.
    * `className` is the attribute used to assign CSS classes to elements in JSX. It is the equivalent of the `class` attribute in HTML.
* It takes a prop called `onClick`, which is a function.
* When the `Backdrop` is clicked, it calls the `onClick` function passed from the parent component.
* The `Backdrop` component, in this example, is used to darken the screen background when a modal is displayed.

---
**The `Modal.js` File:**
```js
function Modal(props) {
  return (
    <div className='modal'>
      <p>{props.text}</p>
      <button className='btn btn--alt' onClick={props.onClose}>
        Cancel
      </button>
      <button className='btn' onClick={props.onClose}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
```
**Key Points:**
* Renders a `div` with a class of `modal`.
* Contains a paragraph displaying the `text` prop, and two buttons ("Cancel" and "Confirm"), both of which execute the `onClose` function passed as a prop when clicked.

---
**The `Todo.js` File:**
```js
import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
```
**Key Points:**
* Imports `Modal` and `Backdrop` components.
* Imports the React `usState` hook, which is used to manage and track state in functional components.
* In this example, `usState` is used to manage the `showModal` variable.
* Renders a `card` with a title (`props.text`) and a "Delete" button.
* Clicking the "Delete" button triggers the `showModalHandler`, setting `showModal` to `true` with:
    * `Backdrop` displayed - clicking it calls `closeModalHandler` to hide the modal. 
    * `Modal` displayed, asking the user for confirmation. Clicking either "Cancel" or "Confirm" also calls `closeModalHandler`.


> [!TIP]
> Check out the :file_folder: [state-management](/state-management/readme.md) section for more information on state usage in React applications.

---
**The `App.js` File:**
```js
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>React Todo List</h1>
      <Todo text='Learn React' />
      <Todo text='Learn React Hooks' />
      <Todo text='Learn React Router' />
    </div>
  );
}

export default App;
```
* Imports the `Todo` component.
* Renders the title "React Todo List" and a three `Todo` components.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## CSS Modules for Styling

* [Basic CSS Files](#basic-css-files)
* [Using CSS Modules](#using-css-modules)

> [!NOTE]
> All examples in this section can be found in :file_folder: [using-css-modules](/using-css-modules)

### <a name="basic-css-files">Basic CSS Files</a>

In React applications, a regular CSS file (`.css`) will apply styles globally to the entire component. 

:white_check_mark: Useful for global styles, resets, and shared styling.

:rotating_light: Can lead to style conflicts if multiple components have the same class names.

**<ins>Example Case Using Basic CSS Styles:</ins>**

The `Header.css` file:
```css
.header {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    text-align: center;
}

.header h1 {
    margin: 0;
    font-size: 1.5rem;
}

.header p {
    margin: 0;
}
```

The `Header.js` file:
```js
import React from 'react';
import './Header.css'; // Importing Basic CSS Stylesheet

function Header() {
  return (
    <header className='header'>
      <h1>Top Books</h1>
      <p>Curated list of top-selling books</p>
    </header>
  );
}

export default Header;
```
* :bulb: In React, the `className` property is used to assign a class name. 
  * This is equivalent to the `class` property in HTML elements.
  * **Using basic CSS files**, a string defining the class name is used.

---

### <a name="using-css-modules">Using CSS Modules</a>

CSS Modules scope CSS styles to a specific component, preventing style conflicts in your project.

:white_check_mark: Styles are locally scoped to a specific component, which prevents class name collisions.

:white_check_mark: Uses unique, automatically generated class names under the hood.

:rotating_light: Requires a special import syntax.

**<ins>Example Case Using CSS Modules:</ins>**

The `Books.module.css` file:
```css
.book {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(#1d3557, #324766);
    padding: 1.5rem;
    border-radius: 6px;
    box-shadow: 0 2px 10px #455874;
    width: 33%;
    transition: all 0.2s
}

.book:hover {
    transform: translateY(-2px);
    transition: transform 0.2s;
    box-shadow: 0 2px 20px #324766;
}

.book h2 {
    margin: 0;
    font-size: 1rem;
    text-transform: uppercase;
}

.book p {
    margin: 0;
    text-align: center;
    font-size: 0.95rem;
}
```

The `Books.js` file:
```js
import React from 'react';
import styles from './Books.module.css'; // Importing CSS Module

function Books(props) {
  return props.items.map((item) => (
    <li className={styles.book} key={Math.random().toString()}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  ));
}

export default Books;
```
* :bulb: In CSS Modules, when you import a `.module.css` file, the styles inside it are automatically converted into a JavaScript object where:
  * **Keys** are the class names you defined in the CSS file.
  * **Values** are unique, auto-generated class names to prevent conflicts.
* **Using CSS module syntax**, the class name is defined between two curly braces (`{}`), accessing the `.book` class of the `styles` object (`className={styles.book}`).

> [!TIP]
> For more information about CSS Modules, check out the [documentation](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) published by the Create React App team.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## Overview of React Hooks

* [Overview](#react-hooks-overview)
* [Rules of React Hooks](#react-hooks-rules)
* [Built-in React Hooks](#react-hooks-built-in)
* [Custom Hooks](#react-hooks-custom-hooks)

---

### <a name="react-hooks-overview">Overview</a>

React Hooks are functions introduced in **React 16.8** that allow you to use React's state and lifecycle features in functional components, which were previously only available in class components. 

Hooks simplify component logic, making it easier to reuse stateful logic without the need for complex patterns like higher-order components or render props.

### <a name="react-hooks-rules">Rules of React Hooks</a>
React Hooks must follow these rules:
1. They *must* be **called at the top level**: React hooks should not be called inside loops, conditions, or nested functions.
2. They *must* be **called only in React functions**: Use hooks only in **functional components** or **custom hooks**, <ins>not regular JavaScript functions</ins>.

### <a name="react-hooks-built-in">Built-in React Hooks</a>
React provides several built-in hooks for development, grouped by purpose:

* **[`useState`](#state-management)**: For managing state in functional components.
```js
const [state, setState] = useState(initialState);
```

* **[`useEffect`](#react-side-effects)**: For managing side effects like data fetching or DOM updates.
```js
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```

* **`useContext`**: For consuming context without needing `Context.Consumer`.
```js
const value = useContext(MyContext);
```

* **`useReducer`**: For managing complex state logic, similar to `redux` reducers.
```js
const [state, dispatch] = useReducer(reducer, initialArg);
```

* **[`useCallback`](#performance-optimization)**: For memoizing functions to prevent unnecessary re-creation.
```js
const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependencies]);
```

* **[`useMemo`](#performance-optimization)**: For memoizing values to avoid expensive recalculations.
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

* **`useRef`**: Persist values across renders or directly manipulate DOM elements.
```js
const ref = useRef(initialValue);
```

* **`useImperativeHandle`**: Customize what is exposed when using `ref` in parent components.
```js
useImperativeHandle(ref, () => ({
  customMethod() {
    // Logic
  },
}));
```

* **`useLayoutEffect`**: Similar to `useEffect`, but runs synchronously after all DOM mutations.

* **`useDebugValue`**: For debugging custom hooks.
```js
useDebugValue(value);
```

> [!TIP]
> Check out the React [documentation](https://react.dev/reference/react/hooks) for a complete list of built-in hooks.

### <a name="react-hooks-custom-hooks">Custom Hooks</a>

* Custom hooks are user-defined hooks created by combining built-in hooks. They encapsulate reusable logic into a function prefixed with `use`.
```js
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}
```

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## State Management
>First look at using the built-in React hook `useState` for state management.

* [State Management Overview](#state-management-overview)
* [Example With useState](#example-with-usestate)

> [!NOTE]
> All examples in this section can be found in :file_folder: [state-management](/state-management)

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

> [!TIP]
> Check out the complete React [documentation](https://react.dev/reference/react/useState) on the built-in `useState` hook.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## React Side Effects
>A look at managing side effects with the `useEffect` hook.

* [Side Effects Overview](#side-effects-overview)
* [Understanding Component Lifecycle](#side-effects-component-lifecycle)
* [Timer Example With useEffect](#side-effects-example)

> [!NOTE]
> All examples in this section can be found in :file_folder: [react-side-effects](/react-side-effects)

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

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

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

> [!NOTE]
> All examples in this section can be found in :file_folder: [performance-optimization](/performance-optimization)

### <a name="performance-optimization-default-behavior">Default Rendering Behavior</a>

By default, React will re-render a component when:
1. **Its state changes** → When you call `setState`, the component and its children re-render.
2. **Its props change** → If a parent component passes new props, the child component re-renders.
3. **Its parent re-renders** → If a parent component re-renders (even without changing props), React re-renders its children.

This default re-rendering behavior ensures that the UI stays in sync with the application state, but this often leads to **unnecessary re-renders that <ins>negatively impact performance</ins>**.

That is where `useMemo`, `useCallback`, and `React.memo` come into place. These optimizations, provided by React, help reduce unnecessary re-renders and improve application performance.

### <a name="performance-optimization-overview">Overview of Optimizations</a>

#### `useMemo`
The `useMemo` React Hook is used to optimize performance by **[memoizing](#performance-optimization-memoization)** (also known as **[caching](#caching)**) the result of a function or computation, so that it is only recalculated when its dependencies change. This prevents expensive computations from running unnecessarily during every render.

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

**<a name="caching">Caching</a> is a technique that allows us to store a copy of a given resource and serve it back when it is requested.**

Memoization is a technique used to optimize the performance of functions by **caching** the results of expensive function calls and reusing them when the same inputs occur again.

In React applications, **memoization** helps avoid redundant rendering of components, ultimately leading to a smoother user experience.

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

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## Making HTTP Requests

* [Overview of HTTP Requests in React](#making-http-requests-overview)
* [Understanding Asynchronous Requests in JavaScript](#making-http-requests-asynchronous-ops)
* [Making a Request to The Star Wars API](#making-http-requests-to-star-wars-api)

> [!NOTE]
> All examples in this section can be found in :file_folder: [making-http-requests](/making-http-requests)

### <a name="making-http-requests-overview">Overview of HTTP Requests in React</a>

In React applications, HTTP requests are commonly made by using JavaScript's `fetch()` API or third-party libraries. 

These requests are usually performed in lifecycle methods, such as `useEffect` or `useCallback` to fetch data from an external API when a component mounts or when triggered by user actions.

---

### <a name="making-http-requests-asynchronous-ops">Understanding Asynchronous Requests in JavaScript</a>

In JavaScript, **asynchronous operations** allow code execution without blocking the main thread, enabling tasks like fetching data, handling user interactions, or waiting for a timer without stopping the execution of other code.

JavaScript is **single-threaded**, meaning it can only execute one operation at a time. Without asynchronous programming, JavaScript would freeze whenever a long-running task is executed.

Asynchronous operations include **callbacks**, **promises**, and **async/await** mechanisms.

The `async` and `await` keywords in JavaScript are used to work with these operations, particularly with Promises. They allow us to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and manage.

1. **Callbacks (Old Approach - Rarely Used and Not Recommended Anymore)**
* Before Promises, callbacks were the primary way to handle asynchronous operations.
```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Received");
    }, 2000);
}

fetchData((result) => {
    console.log(result);
});
```
* Biggest issue that came with callbacks was **Callback Hell** where nesting multiple callbacks led to unreadable code.

---

1. **Promises (More Modern Approach)**
* A Promise represents a value that will be available in the future. It has three states: **pending**, **fulfilled**, and **rejected**.
```js
// Fetching a JSON file
function fetchData() {
  fetch('./movies.json').then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
}
```
* Promises resolved the issue of callback hell.

---

3. **Async/Await (Modern Syntax for Promises)**
* The `async` and `await` keywords simplify working with Promises.
```js
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
```
* Using async/await is more readable then `.then()` chaining.
* Provides a *synchronous-like* structure for easier debugging and better error handling.

#### Summary of Asynchronous Operations
| Feature           | Callbacks            | Promises                    | Async/Await             |
| ----------------- | -------------------- | --------------------------- | ----------------------- |
| Readability       | Poor (callback hell) | Better (`.then()` chaining) | Best (synchronous-like) |
| Error Handling    | Difficult            | Better (`.catch()`)         | Best (`try...catch`)    |
| Nesting Issues    | Yes                  | No                          | No                      |
| Flexibility       | Low                  | Medium                      | High                    |

---

### <a name="making-http-requests-to-star-wars-api">Making a Request to [The Star Wars API](https://swapi.dev/)</a>

> [!NOTE]
> All Star Wars data at [https://swapi.dev/](https://swapi.dev/) :arrow_upper_right:

#### The `App.js` File

**<ins>Importing Component Dependencies:</ins>**
```js
import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
```

**<ins>Defining Component State:</ins>**
```js
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
```
* `movies` will store the fetched movie data - initially set to an empty array (`[]`).
* `isLoading` will track the status of data being fetched - initially set to `false`.
* `error` will store any errors that occur during fetching - initially set to `null`.

**<ins>Defining the Movie Fetch Handler:</ins>**
```js
const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error(response.status + ' : Something went wrong...');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
}, []);
```
**Looking at `useCallback`**
```js
const fetchMoviesHandler = useCallback(async () => { ... }, []);
```
* The dependency array in this function is empty (`[]`), which means the function is created **only once** when the component first renders.

**Updating State Variables**
```js
setIsLoading(true);
setError(null);
```
* `setIsLoading(true)`: Data starts loading - `isLoading` state is set to `true`.
* `setError(null)`: This resets the error state to its initial state, if any previous errors occurred.

**The `try...catch` block**
```js
try {
      const response = await fetch('https://swapi.dev/api/films/');
    ...
}
```
* Fetches data from the external **Star Wars API**.
* `await` ensures the function waits for the API response before continuing execution.
* What is returned from the API call is stored in the `response` variable.

```js
if (!response.ok) {
  throw new Error(response.status + ' : Something went wrong...');
}
```
* Checks if the response returned is of the status code **4xx** or **5xx**, such as **404 Not Found** or **500 Internal Server Error**.
* If the status is not *OK*, then a new error is thrown with a message including the HTTP status code.

```js
const data = await response.json();
```
* Parses the response by converting from JSON format into a JavaScript object.
* `await` ensures it waits until the JSON is completely parsed.

```js
const transformedMovies = data.results.map((movieData) => {
  return {
    id: movieData.episode_id,
    title: movieData.title,
    openingText: movieData.opening_crawl,
    releaseDate: movieData.release_date,
  };
});
setMovies(transformedMovies);
```
* The Star Wars API returns an array of movie objects inside `data.results`.
* `.map()` is used to loop through each movie and extracts only the needed properties.
* `setMovies(transformedMovies)` updates the state, triggering a re-render to display the new movie list.

```js
catch (error) {
  setError(error.message);
}
```
* If an error occurs anywhere inside the `try` block, execution jumps to the `catch` block, where the error message is stored in React state (`setError(error.message)`).

**Final Cleanup**
```js
setIsLoading(false);
```
* Sets the loading state back to false, ensuring it is done whether the fetch was successful or an error occurred.

**<ins>Fetching Data on Component Mount:</ins>**
```js
useEffect(() => {
  fetchMoviesHandler();
}, [fetchMoviesHandler]);
```
* Ensures that `fetchMoviesHandler` runs automatically when the component first mounts.
* Since `fetchMoviesHandler` is wrapped with `useCallback`, React ensures it does not cause unnecessary re-renders.

**<ins>UI State Handling:</ins>**
```js
let content = <p>No movies found.</p>;

if (movies.length > 0) {
  content = <MoviesList movies={movies} />;
}

if (error) {
  content = <p>{error}</p>;
}

if (isLoading) {
  content = <p>Loading...</p>;
}
```
* Renders a different UI based on status of state:
  * Shows "No movies found." if no movies are available.
  * Displays the `MoviesList` component if movies exist (passing the `movies` as prop).
  * Shows an error message if fetching fails.
  * Displays "Loading..." while the request is in progress.

**<ins>Rendering the UI:</ins>**
```js
return (
  <React.Fragment>
    <section>
      <button onClick={fetchMoviesHandler}>Find Movies</button>
    </section>
    <section>{content}</section>
  </React.Fragment>
);
```
* A button manually triggers `fetchMoviesHandler`.
* Dynamically displays the updates of `content` based on `movies`, `isLoading`, and `error`.

**<ins>Exporting the Component:</ins>**
```js
export default App;
```
* Makes `App` available for use in `index.js` (or any other part of the app).

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## All React Demo Projects
| Project                 | Description             | Link    |
| ----------------------- | ----------------------- | ------- |
| Key React Concepts | UI for displaying key React concepts | [:link::file_folder:](/key-react-concepts) |
| Course Goal | Adding course goals to a list | [:link::file_folder:](/course-goal) |
| Add User | Adding users to a list | [:link::file_folder:](/add-user) |
| Investment Calculator | Calculating and displaying investments | [:link::file_folder:](/investment-calculator) |
| Expense Tracker | App for keeping track of expenses | [:link::file_folder:](/expense-tracker) |
| Login Page UI | Displaying a login page and performing validation on user input | [:link::file_folder:](/login-page-ui) |
| Food Order App | Adding menu items to an online food order cart | [:link::file_folder:](/food-order-app) |

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---
