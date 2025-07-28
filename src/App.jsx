import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Educt from "./Pages/Educt/Educt";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Educt />} />
      </Routes>
    </div>
  )
}
export default App;
