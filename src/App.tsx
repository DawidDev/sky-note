import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";

import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import ObservationList from "./Pages/Home/ObservationList";
import { Box } from "@chakra-ui/react";

function App() {
  const [menuStatus, setMenuStatus] = useState<boolean>(true);
  const handleMenu = () => setMenuStatus((prevValue) => !prevValue);

  return (
    <>
      <BrowserRouter>
        <Nav isOpen={menuStatus} onClose={handleMenu} />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/observation-list" element={<ObservationList />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
