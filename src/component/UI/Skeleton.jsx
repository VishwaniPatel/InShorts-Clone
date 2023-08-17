import { PhotographIcon } from "@heroicons/react/outline";
import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-card-fill animate-pulse mx-auto max-w-7xl rounded-xl shadow-lg flex  flex-col md:flex-row m-6 overflow-hidden ">
      <div className="flex items-center justify-center h-52 lg:h-72 md:h-80 w-full md:w-1/3 bg-gray-300 rounded  dark:bg-gray-700">
        <PhotographIcon className="w-10 h-10 text-gray-200 dark:text-gray-600" />
      </div>
      <div className="w-full md:w-2/3 p-6 ">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
    </div>
  );
};

export default Skeleton;
