import { useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function ({ onAdd }) {
  console.log("Add tesk");
  const [task, setTask] = useState("");

  const handleAdd = useCallback(() => {
    if (task.length > 0) {
      onAdd({ task, done: false });
      setTask("");
    }
  }, [task]);

  return (
    <div className="flex items-center">
      <input
        className="flex-1 bg-slate-900 border-2 rounded-l-md border-blue-500 p-3 focus:outline-none text-slate-100 font-semibold "
        type="text"
        placeholder="Add a task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button
        type="button"
        className="border-2 rounded-r-md border-blue-500 text-white bg-blue-500 w-11 h-full text-3xl flex items-center justify-center "
        onClick={handleAdd}
      >
        <FaPlus className="text-xl hover:rotate-180 duration-300" />
      </button>
    </div>
  );
}
