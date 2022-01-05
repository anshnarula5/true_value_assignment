import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const UserTable = ({ users }) => {
  const navigate = useNavigate();
  const handleNavigate = (userId) => {
    navigate(`/users/${userId}`);
  };
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 25;
  const lastIndex = currentPage * usersPerPage;
  const startIndex = lastIndex - usersPerPage;
  const currentUsers = users.slice(startIndex, lastIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <h1>Users</h1>

      <Row>
        <Col md={4}>
          <Form.Group className="my-3 d-flex mx-auto">
            <Form.Control
              placeholder="Search by first name or last name"
              style={{ borderRadius: 0 }}
              onChange={handleChange}
            />
            <Button
              style={{ borderRadius: 0, backgroundColor: "white" }}
              variant="light"
            >
              <i class="fas fa-search"></i>
            </Button>
          </Form.Group>
        </Col>
      </Row>
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
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              onClick={() => handleNavigate(user.id)}
              className="table_row"
            >
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.web}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col md={8} className="offset-md-2 my-3">
          <Pagination
            usersperpage={usersPerPage}
            totalusers={users.length}
            paginate={paginate}
            currentPage = {currentPage}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserTable;
