import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";

function App() {
  return (
    <div>
      <h1>Functional vs Class Components</h1>
      <MyClassComponent text="Simple example of a class component" />
      <MyFunctionalComponent text="Simple example of a function component" />
    </div>
  );
}

export default App;
