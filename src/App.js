import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageLayout from "./components/PageLayout";

import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import UpdateCar from "./pages/UpdateCar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddCar />} />
            <Route path="/update/:id" element={<UpdateCar />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
