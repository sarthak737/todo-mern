import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <ul className="list bg-base-300 rounded-box shadow-md px-10 pb-4">
          <li className="p-4 pb-2 text-md opacity-60 tracking-wide text-center">
            Todo List
          </li>

          {task.length > 0 &&
            task.map((el) => {
              return (
                <li className="list-row flex justify-between items-center">
                  <div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      {el}
                    </div>
                  </div>
                  <button className="btn btn-square btn-ghost">
                    <MdOutlineDone />
                  </button>
                </li>
              );
            })}
          <li>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="input"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                className="btn btn-primary"
                onClick={() => {
                  setTask((prev) => [...prev, input]);
                  console.log(task);
                }}
              >
                Add
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Todo;
