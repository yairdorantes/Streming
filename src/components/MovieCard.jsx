import toast from "react-hot-toast";

const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex relative flex-col mt-5 cursor-pointer">
      <div
        className="absolute top-2 right-2 opacity-80"
        onClick={() => {
          navigator.clipboard
            .writeText(data.location)
            .then(() => toast.success("Copied to clipboard successfully"));
        }}
      >
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
