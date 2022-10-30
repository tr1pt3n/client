import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Naming from "./pages/Naming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/naming" element={<Naming />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
