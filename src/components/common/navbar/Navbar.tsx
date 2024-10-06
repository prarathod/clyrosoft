import React from "react";
import { ThemeModeToggle } from "../toggleButton/ThemeModeToggle";

function Navbar() {
  return (
    <div className="flex justify-between p-8">
      <h1 className="text-3xl font-bold">{"ClyroSoft"}</h1>
      <ThemeModeToggle />
    </div>
  );
}

export default Navbar;
