import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container App">
      <Header/>
      <AddToDo/>
      <Todos/>
    </div>
  );
}

export default App;
