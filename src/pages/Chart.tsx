import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid, chartLink } from "../data/dummy";
import { Header } from "../components";
import { NavLink, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Charts = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-purple-700  dark:hover:text-purple-900 hover:bg-light-gray m-2";

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {chartLink.map((link) => (
          <NavLink
            to={`/charts/${link.name}`}
            key={link.name}
            style={({ isActive }) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {link.icon}
            <span className="capitalize ">{link.name}</span>
          </NavLink>
        ))}{" "}
      </div>
      <Outlet />
    </div>
  );
};

export default Charts;
