import Home from "./Pages/Home/Home";
import Aboutme from "./Pages/Aboutme/Aboutme";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}
export default App;
