import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
// import { TaskList } from "./components/TaskList/TaskList";
import styles from "./App.module.css";
import "./global.css";

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Task  />
        {/* <TaskList /> */}
      </div>
    </div>
)
}

export default App
