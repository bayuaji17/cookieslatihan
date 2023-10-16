import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const registerUser = async (input) => {
  return await http.post(API_ENDPOINT.REGISTER_USER, input);
};

const useCreateUser = () => {
  return useMutation(registerUser);
};

export { registerUser, useCreateUser };
