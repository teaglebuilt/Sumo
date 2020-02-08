import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const name = "test";
  const oneSet = [
    { name, stack: "Completed", value: 0.25 },
    { name, stack: "Started", value: 0.25 },
    { name, stack: "Not Started", value: 0.5 }
  ];

  return (
    <div class="bg-white border rounded shadow">
      <div class="border-b p-3">
        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
      </div>
      <div class="p-5">
        <Line data={oneSet} />
      </div>
    </div>
  );
};

export default Chart;
