import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function PostFormModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    var { content } = document.forms[0]
    
    axios.get('http://localhost:3001/get-posts/$')

  }


  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='postContent'>
              <Form.Label>Content:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
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