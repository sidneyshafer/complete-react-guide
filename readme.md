>Complete guide to building applications in React.

# Table of Contents
* [Base React App](#base-react-app)
* [React App Usage](#react-app-usage)
* [React Component Types](#react-component-types)
  * [Functional Components](#function-components)
  * [Class Components](#class-components)
* [Introduction Project](#introduction-project)
* [State Management](#state-management)
* [All React Demo Projects](#all-react-demo-projects)

## Base React App
>Basic React application used as the base structure for all projects in this guide.

* [File Structure](#file-structure)
* [Code Breakdown](#code-breakdown)

> [!NOTE]
> All examples in this section can be found in project :file_folder: [base-react-app](/base-react-app)

### File Structure
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

### Code Breakdown

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
* Starting from release 17, however, you no longer need this statement.

`import ReactDOM from 'react-dom/client';`
* `ReactDOM` is a library that interacts with the DOM to render React components.
* `react-dom/client` is a new way (starting from React 18) to manage rendering in React apps, replacing ReactDOM.render

`import './index.css';`
* Imports the global CSS file for the app.

`import App from './App';`
* Imports the `App` component from `App.js`, which serves as the root component of the application. 
* The `App` component is typically where the main structure and logic of the app reside.

`const root = ReactDOM.createRoot(document.getElementById('root'));`
* This selects the root DOM element with the `id="root"` (defined in `public/index.html`) and creates a React root using ReactDOM.createRoot.
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
* These are JSX elements that look similar to HTML but are actually JavaScript objects under the hood.
* JSX allows you to write markup directly within your JavaScript code and is then transformed into React elements during compilation.

`export default App;`
* This exports the `App` component as the default export of the file.
* Allows other files to import `App` (in `index.js` as import `App` from `'./App';`) and use it in the application.
* In a larger app, the `App` component would usually serve as the container for other components, managing and rendering their content.

In summary, the `App.js` component:
1. Defines a simple functional React component.
2. Renders an HTML structure using JSX.
3. Is exported for use as the root component of the app.

> [!TIP]
> Check out the React [app usage documentation](/react-app-usage.md) for information on basic app usage in this project.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## React App Usage

Usage for setting up, installing, and managing the React app environment and dependencies is outlined in the React App Usage [documentation](/react-app-usage.md). 

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## React Component Types

>A Look at function and class component definitions.

* [Function Components](#function-components)
* [Class Components](#class-components)
* [Comparison of Components](#comparison-of-components)

> [!NOTE]
> All examples in this section can be found in project :file_folder: [function-class-components](/function-class-components)

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

* [User Interface](#introduction-ui)
* [File Structure](#introduction-file-structure)
* [Full Code Breakdown](#introduction-code-breakdown)

### <a name="introduction-ui">User Interface</a>

Main landing page:

![UI Image - 1](/introduction-project/src/assets/images/ui-1.png)

`Delete` button click modal page:

![UI Image - 2](/introduction-project/src/assets/images/ui-2.png)

### <a name="introduction-file-structure">File Structure</a>
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
> This section does not cover all specific code blocks in `index.js` and `App.js`. For information on code in these files that is not covered, check out the [Base React project](/00-base-react) documentation.

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
> Check out the [State Management](/state-management/readme.md) section for more information on state in React applications.

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

## State Management
>First look at using the built-in React hook `useState` for state management.

* [State Management Overview](#state-management-overview)
* [Example With useState](#example-with-usestate)

> [!NOTE]
> All examples in this section can be found in project :file_folder: [state-management](/state-management)

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

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## All React Demo Projects
| Project                 | Description             | Link    |
| ----------------------- | ----------------------- | ------- |
| Key React Concepts | UI for displaying key React concepts | [:link::file_folder:](/key-react-concepts) |
| Course Goal | Adding course goals to a list | [:link::file_folder:](/course-goal) |
| Add User | Adding users to a list | [:link::file_folder:](/add-user) |
| Expense Tracker | App for keeping track of expenses | [:link::file_folder:](/expense-tracker) |
| Login Page UI | Displaying a login page and performing validation on user input | [:link::file_folder:](/login-page-ui) |

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---