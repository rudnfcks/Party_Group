import React from "react";
import { useStore } from "./Api";
import Router from "./Router";

function App() {
  const store = useStore();

  return (
    <Router />
  );
}

export default App;
