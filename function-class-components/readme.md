## React Component Types
>A Look at function and class component definitions.

* [Function Components](#function-components)
* [Class Components](#class-components)
* [Comparison of Components](#comparison-of-components)

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

<kbd> <br> [Back to Top](#react-component-types) <br> </kbd>