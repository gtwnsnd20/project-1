import React from "react";
import { Modal } from "react-bootstrap";
import getCookie from "./Utils/getCookie";
import { ButtonToolbar,Button, Card, Table, Form, Row, Col, InputGroup } from "react-bootstrap";
function UserProfile(){




    return(
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
                  {/* Beginning of Dynamic Userlist */}
                    <tr>
                      <td>
                        <Card.Link className="d-flex align-items-center">
                          {/* <Image src={u.image} className="user-avatar rounded-circle me-3" /> */}
                          <div className="d-block">
                            <span className="fw-bold"></span>
                          </div>
                        </Card.Link>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><button>Delete User</button></td>
                    </tr>
                  
                  {/* Beginning of Dynamic Userlist */}
  
                </tbody>
            </Table>
          </Card.Body>
          </Card>
        </div>
    )
}
export default UserProfile;