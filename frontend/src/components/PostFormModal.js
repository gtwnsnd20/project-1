import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function PostFormModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();

  }


  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='postFormTextAreaInput'>
              <Form.Label>Content:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Submit Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostFormModal;