import "./App.css";
import LeftPanel from "./Components/leftPanel/LeftPanel";
import Right_Panel from "./Components/Right_Panel/Right_Panel";
import Home from "./Routes/Home";
import Explore from "./Routes/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="left-bar">
        <LeftPanel></LeftPanel>
      </div>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
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
