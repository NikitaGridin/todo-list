import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AddTask({ addTodo }) {
  const inputRef = React.useRef();

  const sendTask = (e, date) => {
    const d = `${date.getHours()}` + ":" + `${date.getMinutes()}`;
    addTodo(e, d);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <div className="mb-6 items-end">
      <input
        type="text"
        placeholder="Add task"
        ref={inputRef}
        autoFocus
        className="outline-none border-b border-black mb-4 w-full"
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        className="cursor-pointer outline-none border-b border-black mb-4 w-1/5"
      />
      <div
        className="bg-black text-white font-bold px-4 py-2 cursor-pointer rounded-md text-center"
        onClick={() => sendTask(inputRef.current.value, startDate)}
      >
        Add
      </div>
    </div>
  );
}

export default AddTask;
