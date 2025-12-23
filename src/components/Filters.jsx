import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../redux/tasksSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 mt-4">
      {["all", "completed", "pending"].map(type => (
        <button
          key={type}
          className="border px-3 py-1 rounded"
          onClick={() => dispatch(setFilter(type))}
        >
          {type}
        </button>
      ))}

      <input
        className="border p-1 rounded ml-auto"
        placeholder="Search..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}
