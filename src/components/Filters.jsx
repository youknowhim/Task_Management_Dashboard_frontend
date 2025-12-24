import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../redux/tasksSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
      
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {["all", "completed", "pending"].map((type) => (
          <button
            key={type}
            onClick={() => dispatch(setFilter(type))}
            className="
              px-4 py-1.5 rounded-full text-sm font-medium
              border transition
              hover:bg-black hover:text-white
              focus:outline-none focus:ring-2 focus:ring-black
            "
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="
          sm:ml-auto
          w-full sm:w-64
          border px-3 py-1.5 rounded-full
          text-sm
          focus:outline-none focus:ring-2 focus:ring-black
          text-black
        "
      />
    </div>
  );
}
