import axios from "axios";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import getCookie from "./Utils/getCookie";

//need to connect to database to get thread ids and add new threads to db
//maybe add a way to add the username of who created the thread 


function ThreadForm(props) {
  const categories = props.categories;

  // state + functions for showing/hiding form
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [catId, setCatId] = useState();

  const [catError, setCatError] = useState({active:false});
  const [titleError, setTitleError] = useState({active:false});
  const [descError, setDescError] = useState({active:false});

  
  const errors = {
    category: 'Must select category',
    title: 'Title must be at least 3 characters',
    description: 'Description must be at least 3 characters'
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCatError({active:false});
    setTitleError({active:false});
    setDescError({active:false});

    const authCookie = getCookie();
    let user_id = authCookie.userid;
    
    let {subject, description} = document.forms[0];

    const params = {
      cat_id: catId,
      subject: subject.value,
      thread_description: description.value,
      user_id: user_id
    }

    if(isNaN(catId)){//Check if category selected
      setCatError({name: 'category', message: errors.category, active:true});
    }
    if(params.subject === undefined || params.subject.length < 3){//Check if title is long enough
      setTitleError({name: 'title', message: errors.title, active:true});
    }
    if(params.thread_description === undefined || params.thread_description.length < 3){//Check if thread is long enough
      setDescError({name: 'description', message: errors.description, active:true});
    }

    if( catError.active === false && titleError.active === false && descError.active === false ){
      console.log('it passed');
      axios.post('http://localhost:3001/add-thread',params).then((_res)=>{
        window.location.reload(false); // Reload page once thread is added.
      }).catch((error)=>{
        if(error.response.status === 400){
          console.log("Improper Format");
        }
        console.log(error);
      })
    }

  };

  const renderErrorMessage = (name,error_msg) => error_msg !== {} && name === error_msg.name && (
    <div className='error'>{error_msg.message}</div>
  );

  //code for new thread form with inputs for the title and description
  const renderThreadForm = (
    <Modal className="threadForm" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Thread</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="newThread" className="form-newthread text-center">
          <Form.Group className="mb-3" controlId="catId">
            <Form.Label>Category</Form.Label>
            <Form.Select value={catId} onChange={(e)=> setCatId(e.target.value)}>
            <option>Select </option>
            {categories.map((cat_id)=>(<option key={cat_id.cat_id} value={cat_id.cat_id}>{cat_id.name}</option>))}
            </Form.Select>
          </Form.Group>
          {renderErrorMessage('category',catError)}
          <br/>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Thread Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter title" name="subject"/>
          </Form.Group>
          {renderErrorMessage('title',titleError)}
          <br/>
          <Form.Group className="mb-3" controlId="threadDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" style={{height:'100px'}} placeholder="Enter a brief description" name='description'/>
          </Form.Group>
          {renderErrorMessage('description',descError)}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit Thread
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Create New Thread
      </Button>

      {renderThreadForm}
    </div>
  );
};

export default ThreadForm;