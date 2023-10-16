import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
// import { Navigate, redirect, useNavigate } from "react-router-dom";
// import { CookieKeys, CookieStorage } from "../../utils/cookies";

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http2
  .get(_key)
  .then((value) => {
    let Datahasil = {
      bayu: value.data.data.name,
    };
    return { data: Datahasil };
  })
  .catch((err) => {
    console.log(err.response.status)
    if (err.response.status === 401) {
        window.location.href = "/login";
      }
    });
  return data;
};
const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};
// INI UDAH LUMAYAN BISA
// const fetchUserData = async ({ queryKey }) => {
//   // const navigate = useNavigate();
//   const [_key] = queryKey;
//   try {
//     const { data } = await http2.get(_key);
//     return data;
//   } catch (err) {
//     if (err.response.status === 401) {
//       // redirect("/login")
//       // window.location.href = "/login";
//     }
//     throw err;
//   }
// };

export { fetchUserData, useGetDataUser };
