import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllTemplates from "./pages/AllTemplates";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllTemplates />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
