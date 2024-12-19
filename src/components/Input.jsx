import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("");
  
    const handleAddTask = (e) => {
      e.preventDefault();
      if (input.trim() !== "") {
        setTaskList([...taskList, input]); // Add input as a string
        setInput(""); // Clear the input field
      }
    };
  
    return (
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1 px-2 text-lg"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-400 text-white py-2 px-3.5 rounded-ls"
          onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    );
  };
  
  export default Input;
  