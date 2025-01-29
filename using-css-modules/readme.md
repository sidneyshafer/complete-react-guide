## CSS Modules for Styling

* [Basic CSS Files](#basic-css-files)
* [Using CSS Modules](#using-css-modules)

### <a name="basic-css-files">Basic CSS Files</a>

In React applications, a regular CSS file (`.css`) will apply styles globally to the entire component. 

:white_check_mark: Useful for global styles, resets, and shared styling.

:rotating_light: Can lead to style conflicts if multiple components have the same class names.

**Example Case Using Basic CSS Styles**

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

**Example Case Using CSS Modules**

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

<kbd> <br> [Back to Top](#css-modules-for-styling) <br> </kbd>
---