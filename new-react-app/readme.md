## Creating a New React App
>Instructions for creating a new React app using **[Node Package Manager (`npm`)](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)**.

* [Overview of Node Package Manager](#creating-new-project-npm-overview)
* [Environment Setup](#creating-new-project-setup)
* [Project Structure](#creating-new-project-structure)
* [File Overview](#creating-new-project-file-overview)

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
        * The `<div id="root"></div>` tag acts as the entry point for React to inject the app.
        * You can add meta tags, external scripts, or other HTML configurations here.
    * **`logo192.png`** *and* **`logo512.png`**
        * Logos displaying the specific React symbol (these are usually discarded).
    * **`favicon.ico`** *and* **`manifest.json`**
        * Provide metadata for the app.
        * The `favicon` is used as the small icon displayed in a browser tab.
    * **`robots.txt`**
        * Tells search engine crawlers which URLs the crawler can access on your site
> [!TIP]
> Check out the project [documentation](/robots.txt.md) for information on the use of robots.txt.

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
        *  Allows configuration of testing environment before any tests are run.
        * Commonly used with testing libraries like Jest and React Testing Library.

**`package.json`**

* Contains metadata about the app and its dependencies.
> [!TIP]
> For key `npm` commands, app usage, and dependency updates, check out the React app usage [documentation](/react.usage.md).

**`.gitignore`**

* A configuration file that specifies which files and directories Git should ignore in version control. 
* These often include `node_modules`, `package-lock.json`, `.DS_Store`, etc.

**`README.md`**

* A markdown document that provides essential information about the project. 
* Typically the first thing users or collaborators see when they visit the repository on platforms like GitHub.

<kbd> <br> [Back to Top](#creating-a-new-react-app) <br> </kbd>
---