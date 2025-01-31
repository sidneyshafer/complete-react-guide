## React Fragments

* [Overview of React Fragments](#react-fragments-overview)
* [Syntax of React Fragments](#react-fragments-syntax)

---

### <a name="react-fragments-overview">Overview of React Fragments</a>

In React, a `Fragment` is a lightweight component that allows you to group multiple elements without adding extra nodes to the DOM. 

This is useful when you need to return multiple elements from a component but don’t want to introduce unnecessary `<div>` wrappers.

:white_check_mark: Helps keep the DOM cleaner and avoids unnecessary elements.

:white_check_mark: Reduces DOM depth and improves rendering efficiency.

:white_check_mark: Helps when rendering lists where an extra wrapper could interfere with styling.

### <a name="react-fragments-syntax">Syntax of React Fragments</a>

#### Using the Explicit `React.Fragment` Syntax
```js
import React from "react";

function ExplicitEx() {
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <p>This is an explicit React Fragment example.</p>
        </React.Fragment>
    );
}

export default ExplicitEx;

// Can also import "Fragment" from React, and use as: //
// import React from "react";
import { Fragment } from "react";

function ExplicitEx() {
    return (
        // <React.Fragment>
        //     <h1>Hello</h1>
        //     <p>This is an explicit React Fragment example.</p>
        // </React.Fragment>
        <Fragment>
            <h1>Hello</h1>
            <p>This is an explicit React Fragment example.</p>
        </Fragment>
    );
}

export default ExplicitEx;
```
* Groups `<h1>` and `<p>` together without introducing an extra `<div>` in the DOM.

---

#### Using the Shorthand Syntax
```js
function ShorthandEx() {
    return (
        <>
            <h1>Hello</h1>
            <p>This is an example of using the shorthand syntax for React Fragments.</p>
        </>
    );
}

export default ShorthandEx;
```
* Shorthand offers simplicity, but **does not support attributes**.

<kbd> <br> [Back to Top](#react-fragments) <br> </kbd>
---