import React, { useEffect, useState } from "react";
import { Button, Card, Tab, Tabs, } from 'react-bootstrap';
import { ThreeDots } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import axios from "axios"
import getCookie from "./Utils/getCookie"

const ForumTabsDemo = (props) => {
  console.log(props.SearchTerms)
  const [threads,setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  //Set inital search terms from props


  //call getCookie to get cookie info
  const cookieInfo = getCookie();
  let isAdmin = false;
  if(cookieInfo !== null) {
    isAdmin = cookieInfo.is_admin;
  }
  
   //Axios Function to delete a thread
 function deleteThread(event){
  let baseURL = 'http://localhost:3001/delete-thread?thread_id=';
  let params = event.target.value;//Get post id from value of button
  console.log(params);
  axios.delete(baseURL+params).then((res)=>{
    window.location.reload(false);
  })
}


useEffect(() => {
  const fetchData = async () =>{
    setLoading(true);
    try {
      const BASE_URL = "http://localhost:3001/search-threads?"
  let params = `terms=${props.SearchTerms}`
      const {data: response} = await axios.get(BASE_URL+params);
      setThreads(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

  fetchData();
}, [props.SearchTerms]);


/* useEffect(()=>{
  setTerms(props.SearchTerms);
  console.log("Attempting search with terms:" +terms);
  const BASE_URL = "http://localhost:3001/search-threads?"
  let params = `terms=${terms}`//Set params of search to cat_id that was gotten from props
  const { data: response } = await axios.get(BASE_URL+params);
    
     axios.get(BASE_URL+params).then((res)=>{
    setThreads(res.data)
  })
  console.log(threads)
},[props.SearchTerms]) */

/*   if(threads.length > 0){
    console.log("Beginning Render") */
  return (
   <>
   <div className="tabcontainer">
{/*      <Tabs variant="tabs" defaultActiveKey="category" id="forumtabs-demo" className="mb-3">
        <Tab eventKey="category" title="Placeholder Category"> */}
        {//Beginning of Dynamic Threads
        threads.map((item)=>(
            <Card key={item.thread_id}>
              <Card.Header as="div" className="cardheader">{item.subject}</Card.Header>
              <Card.Body>
                <Card.Subtitle className="text-muted">
                {item.thread_description}
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer className="cardheader">
                <div className="d-flex justify-content-between">
                  {isAdmin && <div><Button variant="danger" onClick={deleteThread} value={item.thread_id}>Delete</Button></div>}
                  <div className="mx-auto justify-content-end text-end">
                    
                  </div>
              </div>
                
              </Card.Footer>
            </Card>
          
          
          
           ))//End of Dynamically rendered elements
           
   }

     </div>

  </>
  );
  /* } */
  
}
export default ForumTabsDemo;