import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSearchMovies } from "../api/ApiFetch";
import { useState, useEffect } from "react";
const baseImgUrl = process.env.REACT_APP_BASEIMGURL;
export const SearchResult = () => {
  const { query } = useParams();
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearchMovies(query)
      .then((result) => {
        setSearchData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);
  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <div className="bg-slate-900">
      <h1 className="font-semibold text-4xl text-white px-10 py-4">
        {" "}
        Search result "{query}"
      </h1>
      <div className="flex flex-wrap justify-around">
        {searchData.map((movie, index) => (
          <div key={index}>
            <div
              onClick={() => handleGoToDetails(movie.id)}
              className="max-h-full w-10/12 rounded-xl border-2 border-[#be185d] my-10 mx-10 hover:shadow-xl hover:shadow-red-500"
            >
              <img
                src={`${baseImgUrl}/${movie.poster_path}`}
                alt="poster"
                className="h-[35rem] w-full rounded-lg hover:cursor-pointer "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
