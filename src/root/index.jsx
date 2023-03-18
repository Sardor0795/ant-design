import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Routes, Route } from "react-router-dom";
import { sidebar } from "../utils/sidebar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {navbar.map((v) => (
          <Route key={v.id} path={v.path} element={v.element} />
        ))}

        {sidebar.map((v) => (
          <Route key={v.id} path={v.path} element={v.element} />
        ))}
      </Routes>
    </div>
  );
};
