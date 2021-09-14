import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../App.js";
import "./Profiles.css";

export function Profiles() {
  var contextData = useContext(context);
  const { user } = contextData;
  const { id } = useParams();
  console.log(id, user[id - 1].name);
  return (
    <>
      <h2 className="profile-title">{user[id - 1].name}</h2>
    </>
  );
}
