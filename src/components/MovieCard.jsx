import copy from "copy-to-clipboard";
import { useState } from "react";
import toast from "react-hot-toast";

const MovieCard = ({ data }) => {
  console.log(data);
  function copyText(text, id) {
    console.log(id);
    copy(text);
    toast.success("URL copied successfully");
  }
  return (
    <div className="flex relative flex-col mt-5 cursor-pointer">
      <div
        className="absolute top-2 right-2 opacity-80"
        onClick={() => {
          copyText(data.location, data.id);
        }}
      >
        {!data.id ? (
          <svg
            className="text-white w-5 h-5"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path d="M6.5 0A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3zm3 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3z" />
            <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1A2.5 2.5 0 019.5 5h-3A2.5 2.5 0 014 2.5v-1zm6.854 7.354l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L7.5 10.793l2.646-2.647a.5.5 0 01.708.708z" />
          </svg>
        ) : (
          <svg
            className="text-white w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z" />
            <path d="M20 2H10a2 2 0 00-2 2v2h8a2 2 0 012 2v8h2a2 2 0 002-2V4a2 2 0 00-2-2z" />
          </svg>
        )}
      </div>
      <a>
        <div
          className="w-40 h-56 bg-center bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        />
        <div className="mt-1 h-10 flex justify-center items-center absolute bottom-0 bg-black bg-opacity-80 backdrop-blur-md w-full p-1 rounded-bl-lg rounded-br-lg   text-white text-center break-words text-xs font-bold">
          {data.name}
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
