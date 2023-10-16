import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDetailMovies = async (page) => {
  const { data } = await http.get(`${API_ENDPOINT.DETAILS_MOVIE}`);
  console.log(data, "ini details");
  return data;
};

const useMovieDataQuery = (page) => {
  return useQuery(["userData", page], () => fetchDetailMovies(page));
};

export { fetchDetailMovies, useMovieDataQuery };
