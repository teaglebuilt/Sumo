import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import GlobalContext from "../context/globalContext";

const Chart = () => {
  const { data } = useContext(GlobalContext);

  return (
    <div class="bg-white border rounded shadow">
      <div class="border-b p-3">
        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
      </div>
      <div class="p-5">{data ? <Line data={data} /> : <Line />}</div>
    </div>
  );
};

export default Chart;
