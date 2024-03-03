/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todo, setTodo] = useState([
    { name: "task1", priority: "1" },
    { name: "task2", priority: "2" },
  ]);

  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const handleComplete = (index) => {
    const newTodo = [...todo];
    newTodo[index].name = <strike>{newTodo[index].name}</strike>;
    newTodo[index].priority = <strike>{newTodo[index].priority} </strike>;
    setTodo(newTodo);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="p-8 px-2 mx-auto text-center border border-dashed border-emerald-300 mt-5">
      <h1 className="text-2xl font-extrabold text-teal-600 drop-shadow-md">Todo App</h1>

      <form>
        <input
          onChange={handleInputChange}
          type="text"
          name="nm"
          placeholder="Name"
          className="peer mt-3 w-100 h-10 bg-transparent text-blue-gray-700  focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   text-sm px-3 py-2.5 rounded-[7px] outline outline-none border-purple-500 border-blue-gray-200 focus:border-purple-500"
        ></input>

        <p className="text-teal-600 justify-center mt-2 flex">value: {inputValue}</p>
      </form>

      {todo.map((Element, index) => (
        <TodoItem
          name={Element.name}
          name2={Element.priority}
          key={index}
          handleDelete={() => handleDelete(index)}
          handleComplete={() => handleComplete(index)}
        />
      ))}
    </div>
  );
};

export default TodoForm;
