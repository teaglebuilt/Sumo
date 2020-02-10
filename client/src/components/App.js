import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import GlobalContext from "../context/globalContext";
import Form from "./Form";
import Chart from "./Chart";
import Metrics from "./Metrics";

function App() {
  const [data, setData] = useState({});
  const [metrics, setMetrics] = useState({});

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
    socket.on("metrics", res => setMetrics(res));
  }, [data, setData, socket, metrics, setMetrics]);

  return (
    <GlobalContext.Provider value={{ socket, data, metrics }}>
      <div className="container w-full mx-auto pt-20">
        <div className="flex flex-row flex-wrap flex-grow mt-2">
          <div className="w-full md:w-1/2 p-3">
            <Form />
          </div>
          <div className="w-full md:w-1/2 p-3">
            <Chart />
          </div>
        </div>

        <hr className="border-b-2 border-gray-400 my-8 mx-4" />

        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <Metrics />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
