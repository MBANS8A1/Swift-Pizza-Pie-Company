import { useState } from "react";
import { createBrowserRouter } from "react-router";
import "./index.css";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

function App() {
  return (
    <div>
      <h1>Swift Pizza Pie Co.</h1>
    </div>
  );
}

export default App;
