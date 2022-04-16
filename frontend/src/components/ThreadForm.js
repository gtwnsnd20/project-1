import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Windows } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import getCookie from "./Utils/getCookie";

//need to connect to database to get thread ids and add new threads to db
//maybe add a way to add the username of who created the thread 


function ThreadForm(props) {
  const [thread_description, setThread_description] = useState();
  const [cat_id, setCat_id] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [catError, setCatError] = useState (false);
  const [descError,setDescError] = useState (false);
  const categories = props.categories
  

  //function to handle submit event --incomplete for now
  const handleSubmit = (event) => {
    event.preventDefault();
    const authCookie = getCookie;
    setErrorMessage(false);//Reset rrorMessages
    console.log(errorMessage)
    const subject = document.forms[0].subject.value;//Because input is a controlled component, we must get the value from forms

    

      let username= authCookie[1];//Store user information from cookie
      let user_id = authCookie[2];

    console.log(`The variable subject=${subject}`)
    console.log(`The cat_id is${cat_id}`)
    
    const params = {cat_id,subject,thread_description,user_id};
    console.log(params);
    setTitleError(false);
    setCatError(false);
    setDescError(false);
    setErrorMessage(false);


    if(subject.length < 3){//Check if title is long enough
      setErrorMessage(true);
      setTitleError(true);
    }
    if(isNaN(cat_id)){//Check if category selected
      setErrorMessage(true);
      setCatError(true);
    }
    if(thread_description == ''|| thread_description == undefined){//Check if thread is long enough
      setErrorMessage(true);
      setDescError(true);
    } else if(thread_description.length < 3){
      setErrorMessage(true);
      setDescError(true);
    }
    console.log(errorMessage)
    if(!errorMessage){
      axios.post('http://localhost:3001/add-thread',params).then((res)=>{
        console.log(res.data)
        window.location.reload(false);//Reload page once thread is added.
        }).catch((error)=>{
        if(error.response.status === 400){
          console.log("improper Form was found")
        }
        console.log(error)
    })
    }

   


  };
  //code for new thread form with inputs for the title and description
  const renderThreadForm = (

    <div className="threadForm">
      <Form onSubmit={handleSubmit} id="newThread" className="form-newthread text-center">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Thread Title:</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="subject"/>
        </Form.Group>
        {titleError && <p>Title must be at least 3 characters</p>}
        <Form.Group className="mb-3" controlId="cat_id">
          <Form.Label>cat_id</Form.Label>
          <Form.Select value={cat_id} onChange={(e)=> setCat_id(e.target.value)}>
          <option>Select cat_id</option>
          {categories.map((cat_id)=>(<option key={cat_id.cat_id} value={cat_id.cat_id}>{cat_id.name}</option>))}
          </Form.Select>
          
        </Form.Group>
        {catError && <p>Must Select Category</p>}
        <br></br>
        <Form.Group className="mb-3" controlId="threadDescriptoin">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" style={{height:'100px'}} placeholder="Enter brief description" name='thread_description' value={thread_description} onChange={(e)=>setThread_description(e.target.value)}/>
        </Form.Group>
        {descError && <p>Description must be at least 3 characters</p>}
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