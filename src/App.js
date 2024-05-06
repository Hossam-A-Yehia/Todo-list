import React, { useCallback, useEffect, useState, useMemo } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTask] = useState([]);
  const [tasksComplated, setTasksComplated] = useState([]);

  const handleAdd = useCallback(
    (task) => {
      task.id = new Date().getTime();
      setTask([...tasks, task]);
    },
    [tasks]
  );
  const handleRemove = useCallback(
    (id) => {
      setTask(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );
  const handleComplete = useCallback(
    (id) => {
      setTask(
        tasks.map((task) => (task.id === id ? { ...task, done: true } : task))
      );
    },
    [tasks]
  );

  const getTasksComplated = () => {
    setTasksComplated(tasks.filter((task) => task.done));
  };

  useEffect(() => {
    getTasksComplated();
    console.log(tasksComplated);
  }, [tasks]);

  return (
    <div className="App flex bg-gradient-to-r from-slate-900 to-slate-900 justify-center items-center min-h-screen flex-col px-5 md ">
      <div className="bg-slate-800 rounded-xl w-full md:w-1/2 h-1/2 flex justify-center ">
        <div className="flex flex-col flex-1 p-5 items-top gap-5">
          {/* add task */}
          <AddTask onAdd={handleAdd} />

          {/* tasks items */}
          {tasks.length > 0 ? (
            tasks
              .filter((task) => !task.done)
              .map((task, index) => (
                <TaskItem
                  key={`task-${index}`}
                  task={task}
                  onComplete={handleComplete}
                  onRemove={handleRemove}
                />
              ))
          ) : (
            <h1 className="text-2xl font-bold text-center text-slate-300">
              No Tasks !
            </h1>
          )}

          {/* separator */}
          <div className="w-full border border-blue-300"></div>

          {/* done tasks */}
          {tasksComplated.map((task, index) => (
            <TaskItem key={`task-${index}`} task={task} done />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 ">
        <div className="text-white mt-4 text-xl ">
          All tasks :{" "}
          <span className="text-blue-500 font-bold">{tasks.length}</span>
        </div>
        <div className="text-white mt-4 text-xl ">
          Completed tasks :{" "}
          <span className="text-blue-500 font-bold">
            {tasksComplated.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
