import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";

const loginUser = async (input) => {
  return await http2
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      return result;
    })
    .catch((err) => {});
};

const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation(loginUser, {onSuccess: ()=>{navigate("/dashboard")}});
};

export { useLoginUser };
