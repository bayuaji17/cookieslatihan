import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { getPopularMovie } from "../api/ApiFetch";
import { useNavigate } from "react-router-dom";
import { fetchDataMovie } from "../services/get-data-movie-popular";
const baseImg = process.env.REACT_APP_BASEIMGURL;
export const Slider = () => {
  const [popularMovies, setpopularMovies] = useState([]);

  const getDataPopularMovies = async () => {
    const data = await fetchDataMovie();
    console.log(data,"ini di hompage slider");
    setpopularMovies(data.data);
  };

  useEffect(() => {
    getDataPopularMovies();
  }, []);

  const navigate = useNavigate();
  // useEffect(() => {
  //   getPopularMovie().then((results) => {
  //     setpopularMovies(results);
  //   });
  // }, []);

   const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="mx-10 my-10">
                <img
                  src={`${baseImg}/${movie.poster_path}`}
                  alt=""
                  className="rounded-xl hover:cursor-pointer hover:shadow-xl hover:shadow-red-500"
                  onClick={() => handleGoToDetails(movie.id)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
