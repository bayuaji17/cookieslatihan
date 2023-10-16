// import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataMovie = async () => {
  const { data } = await http.get(`${API_ENDPOINT.NOW_POPULAR}`);
  console.log(data, "ini data");
  return data;
};

// const useMovieDataQuery = (page) => {
//   return useQuery(["userData", page], () => fetchDataMovie(page));
// };

export { fetchDataMovie };
