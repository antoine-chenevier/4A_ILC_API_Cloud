import "./leftPanel.css";
import logo from "./logo.png";

function LeftPanel() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img className="sidebar-title-img" src={logo} alt="logo"></img>
        <h2 className="sidebar-title-text">Twitter Clone</h2>
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
      <div className="sidebar-trending">
        <h3 className="sidebar-trending-title">Trending</h3>
        <div className="sidebar-trending-item">
          <span>#ReactJS</span>
        </div>
        <div className="sidebar-trending-item">
          <span>#JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
