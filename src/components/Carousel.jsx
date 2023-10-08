import React, { useState } from "react";
import { getPopularMovie } from "../api/ApiFetch";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTrailer } from "../api/TrailerContext";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Carousel = () => {
  const [popularMovies, setpopularMovies] = useState([]);
  const { trailerData, setTrailer } = useTrailer();

  useEffect(() => {
    getPopularMovie().then((results) => {
      setpopularMovies(results);
    });
  }, []);

  const fetchMovieTrailer = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/${id}/videos`,
        {
          headers: {
            accept: "application/json",
            Authorization: `${process.env.REACT_APP_APIKEY}`,
          },
        }
      );

      const trailer = response.data.results.find(
        (result) => result.type === "Trailer" || result.type === "Teaser"
      );

      if (trailer) {
        setTrailer(trailer);
      } else {
        console.log("Tidak ada trailer yang tersedia.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="h-screen w-full">
                <img
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
                  alt=""
                  className="absolute top-0 left-0 w-full bg-cover z-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-40 z-10 mx-10 my-10">
                  <p className="text-white text-7xl py-8">
                    {movie.original_title}
                  </p>
                  <p className="text-white text-lg w-5/12 py-6">
                    {movie.overview}
                  </p>
                  <button
                    className="w-40 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white flex justify-center items-center gap-2"
                    onClick={() => fetchMovieTrailer(movie.id)}
                  >
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
              {trailerData && (
                <div className="trailer-container">
                  <iframe
                    title="Trailer"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerData.key}`}
                    className="absolute top-0 right-40 bottom-20 left-30 m-auto z-50 rounded-2xl"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
