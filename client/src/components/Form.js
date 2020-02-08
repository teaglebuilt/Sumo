import React, { useContext, useState, useReducer } from "react";
import GlobalContext from "../context/globalContext";

const initialState = {
  host: "",
  requests: 0,
  concurrency: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "request_up":
      return { ...state, requests: state.requests + action.value };
    case "request_down":
      return { ...state, requests: state.requests - action.value };
    case "concurrency_up":
      return { ...state, concurrency: state.concurrency + action.value };
    case "concurrency_down":
      return { ...state, concurrency: state.concurrency - action.value };
    default:
      return { ...state, [action.type]: action.value };
  }
};

const Form = () => {
  const { socket, setData } = useContext(GlobalContext);
  const [formData, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  const sendRequestData = data => {
    console.log(socket);
    socket.emit("outgoing", data);
  };

  const onSubmit = e => {
    e.preventDefault();
    sendRequestData(formData);
  };

  const { host } = formData;

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="url"
          name="host"
          type="text"
          placeholder="https://...."
          value={host}
          onChange={onChange}
        />
      </div>
      <div className="flex flex-row mb-10">
        <div className="custom-number-input h-10 w-32 m-2">
          <label className="w-full text-gray-700 text-sm font-semibold">
            Requests
          </label>
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              type="button"
              onClick={() => dispatch({ type: "request_down", value: 1 })}
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={formData.requests}
            />
            <button
              type="button"
              onClick={() => dispatch({ type: "request_up", value: 1 })}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="custom-number-input h-10 w-32 m-2">
          <label className="w-full text-gray-700 text-sm font-semibold">
            Concurency
          </label>
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              type="button"
              onClick={() => dispatch({ type: "concurrency_down", value: 1 })}
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={formData.concurrency}
            />
            <button
              type="button"
              onClick={() => dispatch({ type: "concurrency_up", value: 1 })}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        />
      </div>
    </form>
  );
};

export default Form;

// const [formData, setFormData] = useState({
//   host: "",
//   requests: 0,
//   concurency: 0
// });

// const updateFormData = event =>
//   setFormData({
//     ...formData,
//     [event.target.name]: event.target.value
//   });
