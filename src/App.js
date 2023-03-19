import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Course1 from "./pages/Course1";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course1" element={<Course1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
