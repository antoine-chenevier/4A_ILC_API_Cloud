import React from "react";
import './Right_Panel.css'

const Right_Panel = () => {
  return (
    <div className="sidebar-trending">
      <h3 className="sidebar-trending-title">Trending</h3>
      <div className="sidebar-trending-item">
        <span>#ReactJS</span>
      </div>
      <div className="sidebar-trending-item">
        <span>#JavaScript</span>
      </div>
    </div>
  );
};

export default Right_Panel;
