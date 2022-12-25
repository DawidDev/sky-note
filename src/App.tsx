import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import PageHeader from "./components/PageHeader/PageHeader";
import Home from "./Pages/Home/Home";
import LibraryStars from "./Pages/LibraryStars/LibraryStars";
import CreateForm from "./Pages/CreateForm/CreateForm";
import CreateObservation from "./Pages/CreateObservation/CreateObservation";
import ObservationList from "./Pages/ObservationList/ObservationList"
import SingleObservation from "./Pages/SingleObservation/SingleObservation";
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
            <Route path="/observation-list/:id" element={<SingleObservation />} />
            <Route path="/library-stars" element={<LibraryStars />} />
            <Route path="/create-form" element={<CreateForm />} />
            <Route path="/star/:id" element={<CreateForm />} />
            <Route path="/create-observation" element={<CreateObservation />} />
          </Routes>
        </VStack>
      </BrowserRouter>
    </>
  );
}

export default App;
