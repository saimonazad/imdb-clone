import React from "react";

const CardHeader = ({ movies }) => {
  let size = 3;
  const renderedItem = movies
    .slice(0, size)
    .map(({ title, time, url, image, id },index) => {
      return (
        <React.Fragment>
          <div
            className="flex flex-row p-3"
            style={{ backgroundColor: index === 0 ? "#141414" : "none" }}
          >
            <div className="">
              <img src={image} width="85" />
            </div>
            <div className="">
              <svg
                className="text-white w-12 h-12 ml-2 inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white ml-2 align-bottom">{time}</span>
              <h1 className="text-white ml-4 text-lg">{title}</h1>
              <p className="text-gray-400 ml-4 text-sm">Watch the Trailer</p>
            </div>
          </div>
        </React.Fragment>
      );
    });

  return (
    <div className="relative ml-3">
      <h1 className="text-yellow-500 text-2xl  ">Up Next</h1>
      {renderedItem}
      <h1 className="text-white text-2xl  ">Browse Trailers</h1>
    </div>
  );
};

export default CardHeader;
