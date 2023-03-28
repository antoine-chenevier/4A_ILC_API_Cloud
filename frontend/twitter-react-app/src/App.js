import "./App.css";
import LeftPanel from "./Components/leftPanel/LeftPanel";
import Right_Panel from "./Components/Right_Panel/Right_Panel";
import Home from "./Routes/Home";
import Explore from "./Routes/Explore";
import Profile from "./Routes/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <LeftPanel className="left-bar"></LeftPanel>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="right-bar">
        <Right_Panel />
      </div>
    </div>
  );
}

export default App;
