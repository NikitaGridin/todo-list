import React from "react";
import { MdDelete } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
function Task({ todo, removeTodo, changeTodo }) {
  return (
    <li
      className={`py-3 px-5 font-bold flex items-center justify-between rounded-xl mx-auto mb-5 shadow-[0px_4px_4px_2px_rgba(0,0,0,0.14)]`}
      key={todo.id}
    >
      <div
        className="check relative flex items-center mr-5"
        onClick={() => changeTodo(todo.id)}
      >
        <MdRadioButtonUnchecked size={30} className="cursor-pointer" />
        {todo.isComplete && (
          <RiCheckboxBlankCircleFill
            className="absolute mx-auto right-0 left-0 cursor-pointer"
            size={16}
          />
        )}
      </div>
      <div
        className={`overflow-auto w-full ${
          todo.isComplete ? "line-through" : ""
        }`}
      >
        {todo.task}
        <div className="text-[12px]">{todo.time}</div>
      </div>

      <MdDelete
        size={40}
        className="cursor-pointer"
        onClick={() => removeTodo(todo.id)}
      />
    </li>
  );
}

export default Task;
