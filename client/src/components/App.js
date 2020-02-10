import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import GlobalContext from "../context/globalContext";
import Form from "./Form";
import Chart from "./Chart";

function App() {
  const [data, setData] = useState({});

  const socket = socketIOClient(`http://localhost:8000`);

  useEffect(() => {
    socket.on("incoming", res =>
      setData({
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Request Time",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: res.requests.map(obj => obj.request_time)
          }
        ]
      })
    );
  }, [data, setData, socket]);

  return (
    <GlobalContext.Provider value={{ socket, data, setData }}>
      <div className="container w-full mx-auto pt-20">
        <div class="flex flex-row flex-wrap flex-grow mt-2">
          <div class="w-full md:w-1/2 p-3">
            <Form />
          </div>
          <div class="w-full md:w-1/2 p-3">
            <Chart />
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
