import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
//need to connect to database to get thread ids and add new threads to db
//maybe add a way to add the username of who created the thread 


function ThreadForm() {
  const [isSubmitted, setIsSubmitted] = useState();
  const [isAdminUser, setIsAdminUser] = useState();

  //function to handle submit event
  const handleSubmit = (event) => {
    //prevent page reload
    event.preventDefault();

    var { threadTitle, threadDescription } = document.forms[0];
    let threadInfo = {
      threadTitle: threadTitle.value,
      threadDescription: threadDescription.value,
    };
  };

  //code for new thread form with inputs for the title and description
  const renderThreadForm = (
    <div className="threadForm">
      <Form onSubmit={handleSubmit} id="newThread">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Thread Title:</Form.Label>
          <Form.Control type="text" id="threadTitle" placeholder="Enter title"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescribe">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" id="threadDescription" placeholder="Enter brief description" />
        </Form.Group>
        <Button variant="info" type="submit">Submit</Button>
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