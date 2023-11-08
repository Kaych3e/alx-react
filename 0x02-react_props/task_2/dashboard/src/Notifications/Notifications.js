import React from "react";
import NotificationItem from "./NotificationItem";
import "../Notifications/Notifications.css";
import { getLatestNotification } from "../utils/utils";
import icon from "../assets/close-icon.png";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right: 20,
        }}
        aria-label="close"
      >
        <img src={icon} style={{ width: "0.5rem" }} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" /l>
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
