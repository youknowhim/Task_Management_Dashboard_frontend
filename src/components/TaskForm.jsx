import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;

    dispatch(addTask({
      id: Date.now(),
      title,
      completed: false,
    }));

    setTitle("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="border-2 p-2 flex-1 rounded"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 rounded"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
