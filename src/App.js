import React from "react";
import Router from "./router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
