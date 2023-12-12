import { PhotographIcon } from "@heroicons/react/outline";
import React from "react";

const SinglePageNewsSkeleton = () => {
  return (
    <div className="relative md:static flex flex-col  mx-auto p-6  rounded-xl shadow-lg m-3  bg-card-fill animate-pulse">
      <div className="flex justify-between ">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      </div>
      <div className="flex mb-6 ">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Author profile"
            className="w-10 h-10 rounded-full me-4 hidden md:block"
          />
        </div>
        <div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] mb-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px]"></div>
        </div>
      </div>
      <div className="h-52 lg:h-80 md:h-80 bg-cover bg-black w-full  mb-4 rounded-xl flex justify-center">
        <PhotographIcon className="w-full h-full object-contain overflow-hidden text-gray-200 dark:text-gray-600" />
      </div>
      <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[60px] mb-4"></div>{" "}
      <div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>{" "}
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>{" "}
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>{" "}
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
    </div>
  );
};

export default SinglePageNewsSkeleton;
