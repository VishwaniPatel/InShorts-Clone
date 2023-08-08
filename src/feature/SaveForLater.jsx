import React from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
const SaveForLater = () => {
  return (
    <div className="flex  items-center justify-center  w-10 h-10 rounded-full bg-white shadow-lg ">
      <BookmarkIcon className="block h-4 w-4" />
    </div>
  );
};

export default SaveForLater;
