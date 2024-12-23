import React from "react";
import { useRoutes } from "react-router-dom";
import routesList from "./routers";

function App() {
  const routes = useRoutes(routesList);
  return routes;
}

export default App;