import React from "react";
import CardHeader from "./CardHeader";

const ListHeader = ({movies}) => {
  return (
    <div className="relative ml-3">
      <h1 className="text-yellow-500 text-2xl  ">Up Next</h1>
          <CardHeader movies={movies} />
      <h1 className="text-white text-2xl  ">Browse Trailers</h1>
    </div>
  );
};

export default ListHeader;
