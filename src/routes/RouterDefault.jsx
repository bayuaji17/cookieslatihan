import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepages } from "../pages/Homepages";
import { AllMovies } from "../pages/AllMovies";
import { DetailsMovies } from "../pages/DetailsMovies";
import { SearchResult } from "../pages/SearchResult";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardTest } from "../pages/DashboardTest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const RouterDefault = () => {
  const queryMovie = new QueryClient();
  return (
    <QueryClientProvider client={queryMovie}>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardTest />} />

        <Route path="/" element={<Homepages />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/details/:id" element={<DetailsMovies />} />
        <Route path="/details/search/:query" element={<SearchResult />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
