import "./leftPanel.css";
import logo from "./logo.png";

function LeftPanel() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img className="sidebar-title-img" src={logo} alt="logo"></img>
        <h2 className="sidebar-title-text">Twitter</h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Explore">Explore</a>
        </li>
        <li>
          <a href="/Profile">Profile</a>
        </li>
      </ul>
    </div>
  );
}

export default LeftPanel;
