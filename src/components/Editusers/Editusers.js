import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { context } from "../../App.js";
import { useHistory, useParams } from "react-router-dom";
import "./Editusers.css";

export default function Editusers() {
  var contextData = useContext(context);

  const history = useHistory();
  const { id } = useParams();
  const { user, setUser, username, setName, image, setImage } = contextData;

  const editUser = () => {
    if (username === "" || image === "") {
      alert("Please enter the value");
    } else {
      const userCopy = [...user];
      let index = userCopy.findIndex((ele) => ele.id === +id);
      userCopy[index] = {
        id: +id,
        name: username,
        img: image,
      };
      setUser(userCopy);
      setName("");
      setImage("");
      history.push("/users");
    }
  };

  useEffect(() => {
    const indexData = user.filter((data) => data.id === +id);
    const { name, img } = indexData[0];
    setName(name);
    setImage(img);
  }, [id, setImage, setName, user]);

  return (
    <div className="edit-user">
      <p className="edit-user-heading">Update User </p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={username}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextField
        id="outlined-basic"
        label="Image Link"
        variant="outlined"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <Button variant="outlined" color="primary" onClick={editUser}>
        Update
      </Button>
    </div>
  );
}
