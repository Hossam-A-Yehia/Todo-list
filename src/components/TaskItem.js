import TaskButton from "./TaskButton";
export default function ({ task, done, onComplete, onRemove }) {
  const defaultClasses =
    "bg-slate-900 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:border-sky-100 border  border-transparent hover:border-sky-600 transition text-blue-500";
  const doneClasses =
    "flex justify-between items-center p-3 gap-2 rounded bg-blue-500 text-white";

  const completeTask = () => {
    onComplete(task.id);
  };

  const removeTask = () => {
    onRemove(task.id);
  };

  return (
    <div className={!done ? defaultClasses : doneClasses}>
      <span data-testid="task-name" className="flex-1">
        {task.task}
      </span>
      {!done && (
        <div
          data-testid="doneBtn"
          className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity "
        >
          <TaskButton type="done" onClick={completeTask} />
          <TaskButton onClick={removeTask} />
        </div>
      )}
      {done && (
        <div className="bg-slate-100 text-center rounded-full text-blue-500 flex justify-center items-center p-1">
          <span className="text-blue-500 font-bold  py-1 px-3">Done</span>
        </div>
      )}
    </div>
  );
}
