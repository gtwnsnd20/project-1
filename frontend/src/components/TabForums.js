import React, { useEffect, useState } from "react";
import { Card, Tab, Tabs, } from 'react-bootstrap';
import { ThreeDots } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import axios from "axios"

const ForumTabsDemo = (props) => {
  const [threads,setThreads] = useState([]);
  const [isRun, setIsRun] = useState(false);

  //axios call to post thread
  const makeThread = (catid,title,userid) =>{
    axios.post('/add_thread', {
      cat_id:catid,
      subject:title,
      user_id:userid
  })
  } 


  useEffect(()=>{
    if(isRun != true){
      const BASE_URL = "http://localhost:3001/get-threads?"
      let params = `cat_id=${props.cat_id}`//Set params of search to cat_id that was gotten from props
       axios.get(BASE_URL+params).then((res)=>{
      setThreads(res.data)
      console.log("<----Recieved Threads---->")
      console.log(res.data)
    })
    //console.log(threads)
    setIsRun(true);
    }
   
  })

  return (
   <>{isRun && (
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
                <div className="mx-auto justify-content-end text-end">
                  {/* <Card.Link as="a" href="#threadpage"> */}
{                   <Link to='/posts'
                    state={{thread_id: item.thread_id,thread_name:item.subject}}>go to post</Link> }
                  {/* <link> */}
                    <ThreeDots color="#a1b5d8" size={30} />
                  {/* </link> */}
                  
                  {/* </Card.Link> */}
                </div>
              </Card.Footer>
            </Card>
          
          
          
           ))
   }
{/*         </Tab>


      </Tabs> */}
     </div>
   )}

{/* <div className="tabcontainer">
      <Tabs variant="tabs" defaultActiveKey="category" id="forumtabs-demo" className="mb-3">
        <Tab eventKey="category" title="Placeholder Category">
          <div> 
            <Card>
              <Card.Header as="div" className="cardheader">Thread Title</Card.Header>
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  Brief description of what to post here.
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer className="cardheader">
                <div className="mx-auto justify-content-end text-end">
                  <Card.Link as="a" href="#threadpage">
                    <ThreeDots color="#a1b5d8" size={30} />
                  </Card.Link>
                </div>
              </Card.Footer>
            </Card>
            <br></br>
            <Card>
              <Card.Header as="div" className="cardheader">Thread Title</Card.Header>
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  Brief description of what to post here.
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer className="cardheader">
                <div className="mx-auto justify-content-end text-end">
                  <Card.Link as="a" href="#threadpage">
                    <ThreeDots color="#a1b5d8" size={30} />
                  </Card.Link>
                </div>
              </Card.Footer>
            </Card>
            <br></br>
            <Card>
              <Card.Header as="div" className="cardheader">Thread Title</Card.Header>
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  Brief description of what to post here.
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer className="cardheader">
                <div className="mx-auto justify-content-end text-end">
                  <Card.Link as="a" href="#threadpage">
                    <ThreeDots color="#a1b5d8" size={30} />
                  </Card.Link>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="tech" title="Technology">
          <div> 
            <Card>
              <Card.Header as="div" className="cardheader">Thread Title</Card.Header>
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  Brief description of what to post here.
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer className="cardheader">
                <div className="mx-auto justify-content-end text-end">
                  <Card.Link as="a" href="#threadpage">
                    <ThreeDots color="#a1b5d8" size={30} />
                  </Card.Link>
                </div>
              </Card.Footer>
            </Card>
            <br></br>
          </div>
        </Tab>
        <Tab eventKey="games" title="Video Games">
          <Card>
            <Card.Header>Thread Title</Card.Header>
            <Card.Body>
              <Card.Subtitle className="text-muted">
                Brief description of what to post here.
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <Card.Link as="a" href="#threadpage">
                <ThreeDots color="#a1b5d8" size={25} />
              </Card.Link>
            </Card.Footer>
          </Card>
        </Tab>
      </Tabs>
    </div> */}
  </>
  );
  
}
export default ForumTabsDemo;