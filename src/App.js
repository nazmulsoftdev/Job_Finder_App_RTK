import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import NotfoundPage from "./pages/NotfoundPage";
import Loading from "./components/Loading/Loading";

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, []);

  return (
    <>
      {loaded ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="addNew" element={<AddPage />} />
            <Route path="edit/:jobId" element={<EditPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
