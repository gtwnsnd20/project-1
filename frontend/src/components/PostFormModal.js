import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
console.log(document.cookie)


//Actual Component
function PostFormModal(props) {

  

  console.log(props.thread_id)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [contentError, setContentError] = useState(false);

  const handleSubmit = (event) => {
    //Get cookie from Document
    setContentError(false);
  const authCookie = document.cookie//Use regex to retrieve acces_token cookie from all cookies and use split to turn it into an array
  .split('; ')
  .find(row => row.startsWith('user_token='))
  .split('=')[1]
  .split(',');
    let username= authCookie[1];
    let user_id = authCookie[2];
    
    console.log(`User_ID=${user_id}`)
    event.preventDefault();
    var { content } = document.forms[0];
    console.log(`The variable content=${content.value}`)
    const params = {thread_id:props.thread_id,user_id:user_id,content:content.value}//Parameters for axios call
    
    if(params.content == undefined || params.content == ''){
      setContentError(true);
    } else if(params.content.length < 3){
      setContentError(true);
    }
    
    if(!contentError){//Send if length of content was good.
      axios.post(`http://localhost:3001/add-post`,params,{headers:{ 

        "Access-Control-Allow-Origin" : "http://localhost:3001",
        "Access-Control-Allow-Methods":"POST,OPTIONS,GET",
        'Access-Control-Allow-Headers': 'text/plain'
      }} ).then((res)=>{
      window.location.reload(false);//Reload page once thread is added.
      }).catch((error)=>{
        console.log(error);
      })
    }
    

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
              <Form.Control as="textarea" rows={3} name="content" />
            </Form.Group>
          </Form>
          {contentError && <p>Post must be at least 3 Characters Long</p>}
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