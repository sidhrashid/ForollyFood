import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import Export from "../../pages/client/export/Export";

const ExportRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/export" element={<Export />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ExportRoute;
