## Making HTTP Requests

* [Overview of HTTP Requests in React](#making-http-requests-overview)
* [Understanding Asynchronous Requests in JavaScript](#making-http-requests-asynchronous-ops)
* [Making a Request to The Star Wars API](#making-http-requests-to-star-wars-api)

---

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

<kbd> <br> [Back to Top](#making-http-requests) <br> </kbd>
---
