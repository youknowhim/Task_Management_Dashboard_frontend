import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";

export default function Dashboard() {
  return (
    <div className="max-w-xl mx-auto">
      <TaskForm />
      <Filters />
      <TaskList />
    </div>
  );
}
