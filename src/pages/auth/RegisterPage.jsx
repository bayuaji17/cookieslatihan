import React, { useState } from "react";
import { useCreateUser } from "../../services/auth/register-auth";

export const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: sendRegisterUser, error } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUserName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };
  if (error) {
    console.log(error.response.data.message, "ini error");
  }

  const registerUser = () => {
    sendRegisterUser({
      email: email,
      name: userName,
      password: password,
    });
  };

  return (
    <div>
      <div className="relative mx-4 flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
            Email
          </span>
          <input
            onChange={handleInput}
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="you@example.com"
          />
          <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
            Username
          </span>
          <input
            onChange={handleInput}
            type="text"
            id="username"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Username"
          />
          <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
            Password
          </span>
          <input
            onChange={handleInput}
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Strong Password"
          />
        </label>
        <button
          className="ml-4 mt-4 w-28 rounded-lg bg-red-500 text-white hover:bg-red-800"
          onClick={() => {
            registerUser();
          }}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};
