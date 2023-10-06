import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;
const baseImg = process.env.REACT_APP_BASEIMGURL;

export const Details = () => {
  const { id } = useParams();

  const [detailsMovie, setDetailsMovie] = useState([]);
  useEffect(() => {
    const fetchDetailsMovie = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${id}`, {
          headers: {
            accept: "application/json",
            Authorization: `${apiKey}`,
          },
        });
        setDetailsMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetailsMovie();
  }, [id]);

  return (
    <div>
      <div className="w-full h-screen">
        <div
          style={{
            backgroundImage: `url(${baseImg}/${detailsMovie.backdrop_path})`,
          }}
          alt=""
          className="w-full h-full bg-cover z-0"
        ></div>
        <div></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-40 z-20 mx-8">
        <p className="text-white text-6xl">{detailsMovie.original_title} </p>
        <p className="text-white text-lg">( {detailsMovie.release_date} )</p>
        <p className="text-white text-md py-4">
          {detailsMovie.genres
            ? detailsMovie.genres.map((genre) => genre.name).join(", ")
            : ""}
        </p>
        <p className="text-white text-lg w-5/12 py-6">
          {detailsMovie.overview}
        </p>

        <p className="text-white text-2xl w-5/12 py-6 flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {detailsMovie.vote_average} / 10
        </p>
        <button className="w-40 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
