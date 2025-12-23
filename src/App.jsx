import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100 text-black"
      }
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow">
        <h1 className="text-xl font-bold">
          Task Management Dashboard
        </h1>
        <ThemeToggle dark={dark} setDark={setDark} />
      </header>

      {/* Main Page Content */}
      <main className="max-w-xl mx-auto p-4 space-y-4">
        <TaskForm />
        <Filters />
        <TaskList />
      </main>
    </div>
  );
}
