import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";

const Metrics = () => {
  const { metrics } = useContext(GlobalContext);

  return (
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-green-600">
                <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
              </div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-500">Total Time</h5>
              <h3 class="font-bold text-3xl">
                {metrics.total_time}
                <span class="text-green-500">
                  <i class="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-orange-600">
                <i class="fas fa-users fa-2x fa-fw fa-inverse"></i>
              </div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-500">Slowest</h5>
              <h3 class="font-bold text-3xl">
                {metrics.slowest}
                <span class="text-orange-500">
                  <i class="fas fa-exchange-alt"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-yellow-600">
                <i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
              </div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-500">Fastest</h5>
              <h3 class="font-bold text-3xl">
                {metrics.fastest}
                <span class="text-yellow-600">
                  <i class="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-blue-600">
                <i class="fas fa-server fa-2x fa-fw fa-inverse"></i>
              </div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-500">Average</h5>
              <h3 class="font-bold text-3xl">{metrics.average}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-indigo-600">
                <i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i>
              </div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-500">
                Requests Per Minute
              </h5>
              <h3 class="font-bold text-3xl">{metrics.requests_per_min}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-red-600">
                <i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i>
              </div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-500">
                Requests Per Second
              </h5>
              <h3 class="font-bold text-3xl">
                {metrics.requests_per_sec}
                <span class="text-red-500">
                  <i class="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
