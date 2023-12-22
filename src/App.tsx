import "./App.css";
import Sider from "./Components/sider/index";
import LandingPage from "./Components/landingPages/index";
import Audio from "./Components/audio/index";
import Library from "./Components/library/index";

import { Routes, Route } from "react-router-dom";
import Songvarieties from "./Components/songVerity";

function App() {
  return (
    <div className="Container">
      <Sider />
      <div className="AubioHolder">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/list" element={<Songvarieties />}></Route>
        </Routes>

        <Audio />
      </div>
      <Library />
    </div>
  );
}

export default App;
