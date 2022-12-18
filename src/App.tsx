import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import PageHeader from "./components/PageHeader/PageHeader";
import Home from "./Pages/Home/Home";
import ObservationList from "./Pages/Home/ObservationList";
import { Box, VStack } from "@chakra-ui/react";

function App() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const handleMenu = () => setMenuStatus((prevValue) => !prevValue);

  return (
    <>
      <BrowserRouter>
        <Nav isOpen={menuStatus} onClose={handleMenu} />
        <VStack spacing="0">
          <PageHeader handleMenu={handleMenu}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/observation-list" element={<ObservationList />} />
          </Routes>
        </VStack>
      </BrowserRouter>
    </>
  );
}

export default App;
