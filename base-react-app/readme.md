## Base React App
>Basic React application used as the base structure for all projects in this guide.

* [File Structure](#file-structure)
* [Code Breakdown](#code-breakdown)
* [App Usage](#app-usage)

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

<kbd> <br> [Back to Top](#base-react-app) <br> </kbd>