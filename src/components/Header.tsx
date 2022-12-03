import React from "react";

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-purple-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-purple-900">
      {title}
    </p>
  </div>
);

export default Header;
