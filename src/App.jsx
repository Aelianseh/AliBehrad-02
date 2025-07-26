import Home from "./Pages/Home/Home";
import Aboutme from "./Pages/Aboutme/Aboutme";
import { Route, Routes } from "react-router-dom";
import Emails from "./Pages/Email/Emails";
import Linkedin from "./Pages/linkedin/linkedin";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Aboutme />} />
        <Route path="/email" element={<Emails />} />
        <Route path="/linkedin" element={<Linkedin />} />

      </Routes>
    </div>
  );
}
export default App;
