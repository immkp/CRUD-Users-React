import React, { useContext } from "react";
import "./Users.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { context } from "../../App.js";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";

export function Users() {
  var contextData = useContext(context);

  const { user } = contextData;
  const history = useHistory();

  return (
    <div>

      <div className="create-user-outer">
        <div className="create-user-inner">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/create")}
          >
            Create User 
          </Button>
        </div>
      </div>
      <h2 className="users-title">Users List</h2>

      <div className="table-box">
        <Table className="user-table" aria-label="customized table">
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
            >
              <TableCell
                align="left"
                style={{
                  color: "white",
                }}
              >
                Id
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: "white",
                }}
              >
                Images
              </TableCell>
              <TableCell
                style={{
                  color: "white",
                }}
                align="left"
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  color: "white",
                }}
              >
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.map((users, index) => (
              <UserContent users={users} key={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function UserContent(props) {
  var contextData = useContext(context);
  const { user, setUser } = contextData;
  const { id, img, name } = props.users;
  const history = useHistory();
  const deleteUsers = (id) => {
    const copyUser = [...user];
    console.log(id);
    setUser([...copyUser.filter((ele) => ele.id !== id)]);
  };
  return (
    <TableRow key={name}>
      <TableCell>{id}</TableCell>
      <TableCell onClick={() => history.push(`/profile/${id}`)}>
        <img
          className="user-image"
          src={img}
          alt="Error"
          onClick={() => history.push(`/profile/${id}`)}
        />
      </TableCell>
      <TableCell>
        <p onClick={() => history.push(`/profile/${id}`)} className="user-name">
          {name}
        </p>
      </TableCell>
      <TableCell>
        <div className="edit-delete">
          <IconButton aria-label="delete" onClick={() => deleteUsers(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => history.push(`/edit/${id}`)}
          >
            <EditIcon />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default Users;
