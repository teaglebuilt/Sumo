import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import GlobalContext from "../context/globalContext";
import Form from "./Form";

function App() {
  const [connected, setConnected] = useState(false);
  const [data, setData] = useState({});

  const socket = socketIOClient(`http://localhost:8000`);

  return (
    <GlobalContext.Provider value={{ socket, data, setData }}>
      <div className="App">
        <div className="w-full max-w-md bg-gray-800">
          <Form />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
