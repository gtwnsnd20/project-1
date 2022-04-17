import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import getCookie from "./Utils/getCookie";
axios.defaults.withCredentials = true;

function PostFormModal(props) {

  // state + functions for showing/hiding form
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state for rendering error message
  const [errorMessage,setErrorMessage] = useState({});

  const errors = {
    length: "Text must be at least 3 characters long"
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    //Get cookie from Document
    const authCookie = getCookie();
    
    let user_id = authCookie.userid;
    var { content } = document.forms[0];
    const params = {
      thread_id:props.thread_id,
      user_id:user_id,
      content:content.value
    }
    
    if(params.content === undefined || params.content.length < 3){ // renders content length error on submit if too small
      setErrorMessage({name: 'length', message: errors.length});
    } else {
      axios.post(`http://localhost:3001/add-post`,params,{headers:{ 
        "Access-Control-Allow-Origin" : "http://localhost:3001",
        "Access-Control-Allow-Methods":"POST,OPTIONS,GET",
        'Access-Control-Allow-Headers': 'text/plain'
      }}).then((_res)=>{
        window.location.reload(false); // Reload page once thread is added.
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

  const renderErrorMessage = (name) => name === errorMessage.name && (
    <div className='error'>{errorMessage.message}</div>
  );

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Create New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='postContent'>
              <Form.Label>Content:</Form.Label>
              <Form.Control as="textarea" rows={3} name="content" />
            </Form.Group>
          </Form>
          {renderErrorMessage('length')}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' type="submit" onClick={handleSubmit}>
            Submit Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PostFormModal;