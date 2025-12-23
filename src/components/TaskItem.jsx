import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/tasksSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return (
    <div className="flex justify-between items-center p-3 border rounded">
      {editing ? (
        <input
          className="border p-1 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.title}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() =>
            dispatch(updateTask({ ...task, completed: !task.completed }))
          }
          className="text-green-600"
        >
          {task.completed ? "Pending" : "Done"}
        </button>

        {editing ? (
          <button
            onClick={() => {
              dispatch(updateTask({ ...task, title }));
              setEditing(false);
            }}
            className="text-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-blue-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
