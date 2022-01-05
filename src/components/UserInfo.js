import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UserInfo = ({ users }) => {
  const [userInfo, setUserInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const user = users[id - 1];
    setUserInfo(user);
  }, [users]);
  console.log(userInfo);
  return (
    <>
      <h1>
       <Link to="/" className="mx-3"><i class="fas fa-arrow-left"></i></Link> Details : {userInfo.first_name} {userInfo.last_name}
      </h1>
      <ListGroup variant="flush" className="my-3 fs-5">
        <ListGroupItem className="py-3 ">
          First Name : <span className="fw-bold">{userInfo.first_name}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          Last Name : <span className="fw-bold">{userInfo.last_name}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          Company Name :{" "}
          <span className="fw-bold">{userInfo.company_name}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          City : <span className="fw-bold">{userInfo.city}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          State : <span className="fw-bold">{userInfo.state}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          Zip : <span className="fw-bold">{userInfo.zip}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          Email : <span className="fw-bold">{userInfo.email}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          Web : <span className="fw-bold">{userInfo.web}</span>
        </ListGroupItem>
        <ListGroupItem className="py-3">
          Age : <span className="fw-bold">{userInfo.age}</span>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default UserInfo;
