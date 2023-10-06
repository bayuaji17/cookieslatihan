import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;
const searchUrl = process.env.REACT_APP_BASEURLSEARCH;
export const getPopularMovie = async () => {
  const popularMovie = await axios.get(
    `${baseUrl}/popular?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `${apiKey}`,
      },
    }
  );
  return popularMovie.data.results;
};

export const getSearchMovies = async (q) => {
  const searchMovies = await axios.get(
    `${searchUrl}?query=${q}`,
    {
      headers: {
        Authorization: `${apiKey}`,
      },
    }
  );
  return searchMovies.data.results;
};

export const getAllMovies = async () => {
  const allMovies = await axios.get(
    `${baseUrl}/now_playing?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `${apiKey}`,
      },
    }
  );
  return allMovies.data.results;
};
