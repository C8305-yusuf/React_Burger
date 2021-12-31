import React from "react";
import Classes from "./styles/Tomatoes.module.css";

export default function Tomatoes() {
  return (
    <div className={Classes.group}>
      <div className={Classes.Tomatoes}></div>
      <div className={Classes.Tomatoes}></div>
    </div>
  );
}