import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">ToDo App</h1>
      <Task />
      <TaskList />
    </div>
  );
};

export default App;
