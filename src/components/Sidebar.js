import React from "react";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,992</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4,991</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__bottomHeading">Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Javascript")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("Developer")}
        {recentItem("Python")}
        {recentItem("Software Dev")}
      </div>
    </div>
  );
}

export default Sidebar;
