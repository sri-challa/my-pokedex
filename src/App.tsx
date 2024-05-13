import { Route, Routes } from "react-router-dom";

import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import HomePage from "./Pages/Home/HomePage";
import AppLayout from "./Pages/Layout/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<DetailsPage />} />
          <Route path="*" element={<span>Page not found</span>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
