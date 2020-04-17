import React from "react";
import { ToastContainer } from "react-toastify";

import Main from "./pages/Main";

import GlobalStyles from "./styles/global";
import ToolRepository from "./store/actions";

function App() {
  const toolRepository = new ToolRepository();

  return (
    <>
      <GlobalStyles />
      <Main toolRepository={toolRepository} />
      <ToastContainer />
    </>
  );
}

export default App;
