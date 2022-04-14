import React from "react";
import { ButtonToolbar,Button, Card, Table, Form, Row, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch,  } from "@fortawesome/free-solid-svg-icons";
import MyAvatar from "./Assets/Avatar";
import '../input.scss';


function UserTable() {
  return (
    <>
      <div className="justify-content-between text-center align-items-center py-4">
        <h4>Users List</h4>
      </div>

      <div className="search mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={9} lg={4} className="d-flex">
            <InputGroup className="me-2 me-lg-3">
              <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <div className="btn-toolbar mb-2 mb-md-0">
        <ButtonToolbar>
          <Button variant="primary" size="sm">
            <FontAwesomeIcon icon={faPlus} className="me-2" />Add New User.
          </Button>
        </ButtonToolbar>
      </div>

      <div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body>
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">Username</th>
                <th className="border-bottom">Email</th>
                <th className="border-bottom">Role</th>
                <th className="border-bottom">Registration Date</th>
                <th className="border-bottom">Last Login Date</th>
              </tr>
              </thead>
              <tbody>
                <tr id="demoUserPlaceholder">
                  <td>
                    <Card.Link className="d-flex align-items-center">
                      <MyAvatar className="user-avatar me-3" />
                      <div className="d-block">
                        <span className="fw-bold">defaultUsername</span>
                      </div>
                    </Card.Link>
                  </td>
                  <td>default_user@gmail.com</td>
                  <td>Basic</td>
                  <td>March 20, 2020</td>
                  <td>April 5, 2022</td>
                </tr>
                {/* {Users.map(u => (
                  <tr key={u.key}>
                    <td>
                      <Card.Link className="d-flex align-items-center">
                        <Image src={u.image} className="user-avatar rounded-circle me-3" />
                        <div className="d-block">
                          <span className="fw-bold">{u.username}</span>
                        </div>
                      </Card.Link>
                    </td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>{u.dateRegistered}</td>
                    <td>{u.lastLogin}</td>
                  </tr>
                ))} */}
              </tbody>
          </Table>
        </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default UserTable;