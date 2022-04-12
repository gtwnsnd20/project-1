import React from "react";
import { Breadcrumb, ButtonToolbar,Button,ButtonGroup, Card, Table, Form, Dropdown, Row, Col, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus,faCog, faCheck, faSearch, faSlidersH  } from "@fortawesome/free-solid-svg-icons";
import MyAvatar from "./Assets/Avatar";


function UserList() {
  return (
    <>
      <div className="d-lg-flex jsutify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="mb-4 mb-lg-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{className: " breadcrumb-dark breadcrumb-transparent"}} >
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item active>Users List</Breadcrumb.Item>           
          </Breadcrumb>
          <h4>Users List</h4>
          <p className="mb-0">User controls dashboard.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonToolbar>
            <Button variant="primary" size="sm">
              <FontAwesomeIcon icon={faPlus} className="me-2" />Add New User.
            </Button>
            <ButtonGroup className="ms-3">
              <Button variant="outline-primary" size="sm">Save</Button>
              <Button variant="outline-primary" size="sm">Export</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>

      <div className="table-settings mb-4">
          <Row className="justify-content-between align-items-center">
              <Col xs={9} lg={4} className="d-flex">
                  <InputGroup className="me-2 me-lg-3">
                      <InputGroup.Text>
                          <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                      <Form.Control type="text" placeholder="Search" />
                  </InputGroup>
                  <Form.Select className="w-25">
                      <option defaultChecked>All</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                      <option value="3">Pending</option>
                      <option value="3">Canceled</option>
                  </Form.Select>
              </Col>
              <Col xs={3} lg={8} className="text-end">
                  <Dropdown as={ButtonGroup} className="me-2">
                      <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                          <span className="icon icon-sm icon-gray">
                              <FontAwesomeIcon icon={faSlidersH} />
                          </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-right">
                          <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                          <Dropdown.Item className="d-flex fw-bold">
                              10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                          </Dropdown.Item>
                          <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                          <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                          <span className="icon icon-sm icon-gray">
                              <FontAwesomeIcon icon={faCog} />
                          </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-right">
                          <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                          <Dropdown.Item className="d-flex fw-bold">
                              10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                          </Dropdown.Item>
                          <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                          <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Col>
          </Row>
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
export default UserList;