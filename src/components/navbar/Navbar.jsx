import React from "react";
import { Brand } from "../Brand";
import { Button } from "../Button";
import { Search } from "../Search";

export const Navbar = () => {
  return (
    <div className="flex flex-row gap-3 relative justify-between mx-3 px-3 my-3 z-10">
      <Brand />
      <Search />
      <Button />
    </div>
  );
};
