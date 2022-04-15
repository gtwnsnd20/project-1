import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

//need to connect to database to get thread ids and add new threads to db
//maybe add a way to add the username of who created the thread 


function ThreadForm(props) {
  const [isSubmitted, setIsSubmitted] = useState();
  const [isAdminUser, setIsAdminUser] = useState();
  const [thread_description, setThread_description] = useState();
  const [cat_id, setCat_id] = useState();
  const categories = props.categories


  //function to handle submit event --incomplete for now
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = document.forms[0].subject.value;//Because input is a controlled component, we must get the value from forms
    const authCookie = document.cookie//Use regex to retrieve acces_token cookie from all cookies and use split to turn it into an array
    .split('; ')
    .find(row => row.startsWith('access_token='))
    .split('=')[1]
    .split(',');
      let username= authCookie[1];//Store user information from cookie
      let user_id = authCookie[2];
    //console.log(document.forms[0]);//store form data in variables to be sent to backend via axios
    console.log(`The variable subject=${subject}`)
    console.log(`The cat_id is${cat_id}`)
    
    const params = {cat_id,subject,thread_description,user_id};
    console.log(params);
    axios.post('http://localhost:3001/add-thread',params).then((res)=>{
      console.log(res.data)
    })
   


  };

  //code for new thread form with inputs for the title and description
  const renderThreadForm = (

    <div className="threadForm">
      <Form onSubmit={handleSubmit} id="newThread" className="form-newthread text-center">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Thread Title:</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="subject"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="cat_id">
          <Form.Label>cat_id</Form.Label>
          <Form.Select value={cat_id} onChange={(e)=> setCat_id(e.target.value)}>
          <option>Select cat_id</option>
          {categories.map((cat_id)=>(<option key={cat_id.cat_id} value={cat_id.cat_id}>{cat_id.name}</option>))}
          </Form.Select>
          
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3" controlId="threadDescriptoin">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" style={{height:'100px'}} placeholder="Enter brief description" name='thread_description' value={thread_description} onChange={(e)=>setThread_description(e.target.value)}/>
        </Form.Group>
        <Button variant="info" type="submit" className="justify-content-center">Submit</Button>
      </Form>
    </div>
  );

  return (
    <>
      <div className="createthread">
        <div className="newformtitle">Create New Thread</div>
        <div>
          {renderThreadForm}
        </div>
      </div>
    </>
  );
};

export default ThreadForm;