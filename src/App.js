import React from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (inputRef, d) => {
    if (inputRef) {
      const newTask = {
        id: Math.random().toString(36).substring(7),
        task: inputRef,
        time: d,
        isComplete: false,
      };
      setTodos([...todos, newTask]);
    }
    console.log(d);
  };
  const removeTodo = (id) => {
    setTodos([...todos.filter((t) => t.id !== id)]);
  };
  const changeTodo = (id) => {
    setTodos([
      ...todos.map((t) =>
        t.id === id
          ? {
              ...t,
              isComplete: !t.isComplete,
            }
          : { ...t }
      ),
    ]);
  };
  let a = 0;
  todos.map((e) => {
    if (e.isComplete) {
      a++;
    }
  });
  return (
    <div className="app items-center justify-center h-[100vh] font-mono bg-gradient-to-tr from-[#190A05] to-[#870000]">
      <h2 className="text-white font-bold text-4xl py-10 text-center">
        Поставленные задачи
      </h2>
      <div
        className={`flex items-center absolute right-0 transition-all duration-500 h-32 ${
          modal ? "translate-x-[0px]" : "translate-x-[350px]"
        }`}
      >
        <div
          className="bg-[#E52F2F] flex items-center h-1/3 px-3 rounded-l-lg"
          onClick={() => handleModal()}
        >
          {!modal && <FaArrowCircleLeft fill="white" size={24} />}
          {modal && <FaArrowCircleRight fill="white" size={24} />}
        </div>
        <div className="bg-white p-5 h-full rounded-l-[34px] flex flex-col justify-between min-w-[350px] max-w-[350px] overflow-auto">
          <div> Всего задач за сегодня: {todos.length}</div>
          <div>Задач выполнено за сегодня: {a}</div>

          <div>
            Сегодняшнаяя продуктивность:
            {a && todos.length > 0
              ? `            ${Math.round((a / todos.length) * 100, 2)}%
`
              : ""}
          </div>
        </div>
      </div>
      <div className="w-2/5 h-[710px] mx-auto rounded-[34px] p-[42px] bg-white">
        <ul className="overflow-auto px-2 mb-5 h-4/5">
          {todos.map((t) => (
            <Task
              todo={t}
              removeTodo={removeTodo}
              mb-4
              changeTodo={changeTodo}
              key={t.id}
            />
          ))}
        </ul>
        <AddTask addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
