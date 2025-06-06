import AppName from "./assets/components/AppName";
import AddTodo from "./assets/components/AddTodo";
import Todoitem2 from "./assets/components/Todoitem2";
import Todoitem1 from "./assets/components/Todoitem1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
