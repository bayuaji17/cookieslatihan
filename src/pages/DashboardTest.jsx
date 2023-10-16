import React, { useEffect } from "react";
import { useGetDataUser } from "../services/auth/get_user";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { useNavigate } from "react-router-dom";
export const DashboardTest = () => {
  const { data: salto, status, isError } = useGetDataUser({});
  // useEffect(() => {
  //   // const dataToken = CookieStorage.get(CookieKeys.AuthToken);
  //   // if (!dataToken) {
  //   //   navigate("/login");
  //   // }
  //   // if (!salto) {
  //   //   navigate("/login");
  //   // }
  // },);

  const navigate = useNavigate();

  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    navigate("/login");
  };
  return (
    <div>
      <h1>DashboardTest</h1>
      <div>
        <button
          className="border-2 bg-teal-700 w-40 text-white"
          onClick={handleLogout}
        >
          LogOut/ke loginpage
        </button>
      </div>
    </div>
  );
};
