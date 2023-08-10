const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col mt-5 cursor-pointer">
      <a href={data.location}>
        <div
          className="w-40 h-48 bg-center bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        />
        <div className="mt-2 ml-2 text-gray-300 text-sm font-bold">
          {data.name}
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
