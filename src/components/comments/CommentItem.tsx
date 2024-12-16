import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function CommentItem() {
  return (
    <div className="flex flex-col bg-white p-5 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <strong className="text-lg font-semibold text-gray-900">
            John Doe
          </strong>
          <span className="text-sm text-gray-500">@johndoe</span>
        </div>
        <span className="text-sm text-gray-400">1 day ago</span>
      </div>
      <p className="text-gray-700 text-base">{`Thanks for sharing!`}</p>
      <div className="flex items-center space-x-2 mt-4">
        <FaEdit className="text-blue-500 cursor-pointer" />
        <FaTrashAlt className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default CommentItem;
