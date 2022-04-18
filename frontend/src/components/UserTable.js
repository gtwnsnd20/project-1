import React, { useEffect, useState } from "react";
import { ButtonToolbar,Button, Card, Table, Form, Row, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import '../input.scss';



//adjust dates to match Users timezone
function adjustForTimezone(date){
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  let d = new Date(date).toLocaleString('en-US', { timeZone: currentTimeZone });
  return d;
}

//Axios Call to delete user
function deleteUser(event){
  let userid = event.target.value
  const BASE_URL = "http://localhost:3001/delete-user?"//URI
  let params = `user_id=${userid}`;
   axios.delete(BASE_URL+params).then((res)=>{
    //window.location.reload(false);
  }) 
}




function UserTable() {
  const [isRun, setIsRun] = useState(false);
  const [users, setUsers] = useState([]);
  const [terms, setTerms] = useState();
  //On load, get threads

  const handleSubmit = (event) =>{
    event.preventDefault();
    
    console.log(terms)
    let params = `?terms=${terms}`
    const Base_URL = "http://localhost:3001/search-users";
    axios.get(Base_URL+params).then((res)=>{
      setUsers(res.data);
    })
  }

  useEffect(()=>{
    if(isRun !== true){
      const BASE_URL = "http://localhost:3001/get-users";
      axios.get(BASE_URL).then((res)=>{
      setUsers(res.data);
    })
    setIsRun(true);
    }
   
  },[])


  return (
    <>
    
      <div className="justify-content-between text-center align-items-center py-4">
        <h4>Users List</h4>
      </div>
      
      <div className="search mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={9} lg={4} className="d-flex">
            <Form  onSubmit={handleSubmit}>
              <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" name="terms" value={terms} onChange={e=>setTerms(e.target.value)}/>
                  <Button onClick={handleSubmit}>Search</Button>
                </InputGroup>
            </Form>

          </Col>
        </Row>
      </div>
{/*       <div className="btn-toolbar mb-2 mb-md-0">
        <ButtonToolbar>
          <Button variant="primary" size="sm">
            <FontAwesomeIcon icon={faPlus} className="me-2" />Add New User.
          </Button>
        </ButtonToolbar>
      </div> */}
      
      {/* Beginning of User List */}
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
                {users.map(u => (
                  <tr key={u.key}>
                    <td>
                      <Card.Link className="d-flex align-items-center">
                        {/* <Image src={u.image} className="user-avatar rounded-circle me-3" /> */}
                        <div className="d-block">
                          <span className="fw-bold">{u.username}</span>
                        </div>
                      </Card.Link>
                    </td>
                    <td>{u.email}</td>
                    <td>{u.role_name}</td>
                    <td>{adjustForTimezone(u.register_date)}</td>
                    <td>{adjustForTimezone(u.last_login)}</td>
                    <td><button onClick={deleteUser} value={u.user_id}>Delete User</button></td>
                  </tr>
                ))} 
                {/* Beginning of Dynamic Userlist */}

              </tbody>
          </Table>
        </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default UserTable;