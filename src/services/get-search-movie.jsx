import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchSearchMovie = async () => {
  const { data } = await http.get(`${API_ENDPOINT.SEARCH_USER}`);
  return data;
};

// const useMovieDataQuery = (page) => {
//   return useQuery(["userData", page], () => searchMovie(page));
// };

export { fetchSearchMovie };
