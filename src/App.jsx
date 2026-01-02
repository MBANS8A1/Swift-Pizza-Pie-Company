import { useState } from "react";
import { createBrowserRouter } from "react-router";
import "./index.css";
import Home from "./ui/Home";

createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
