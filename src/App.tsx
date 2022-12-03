import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer, Sidebar } from "./components";
import {
  View,
  Orders,
  Calendar,
  Employees,
  Customers,
  Todo,
  Area,
  ColorPicker,
  Editor,
  Chart,
  Line,
  Bar,
  Financial,
  ColorMapping,
  Pyramid,
  Pie,
  Stacked,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-64 fixed z-50 sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen lg:ml-64 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="    bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<View />} />
                <Route path="/view" element={<View />} />

                <Route path="/customers" element={<Customers />} />

                <Route path="/todo" element={<Todo />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/charts" element={<Chart />}>
                  <Route path="line" element={<Line />} />
                  <Route path="area" element={<Area />} />
                  <Route path="bar" element={<Bar />} />
                  <Route path="pie" element={<Pie />} />
                  <Route path="financial" element={<Financial />} />
                  <Route path="color-mapping" element={<ColorMapping />} />
                  <Route path="pyramid" element={<Pyramid />} />
                  <Route path="stacked" element={<Stacked />} />
                </Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
