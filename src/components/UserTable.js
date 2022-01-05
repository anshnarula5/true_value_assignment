import React from "react";
import { Table } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const UserTable = ({users}) => {
    const navigate = useNavigate()
    const handleNavigate = (userId) => {
        navigate(`/${userId}`)
    }
  return (
    <>
      <h1>Users</h1>
      <Table hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleNavigate(user.id)} className="table_row" >
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.web}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
