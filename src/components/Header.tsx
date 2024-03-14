import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-[#2c003f] text-white">
      <h1 className="text-2xl text-center py-5">NextJS를 이용한 TODOLIST</h1>
      <Nav />
    </div>
  );
};

export default Header;
