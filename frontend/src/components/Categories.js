import React, { useEffect, useState } from "react";
import { Card, Tab, TabContent, Tabs, } from 'react-bootstrap';
import { ThreeDots } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import TabForums from "../components/TabForums";
import ThreadForm from "./ThreadForm";
import getCookie from "./Utils/getCookie";
const  styleObject = {
  textAlign: "center"
}

const ForumTabsDemo = () => {
  const [categories,setCategories] = useState([]);
  const [isRun, setIsRun] = useState(false);

  //On component load, get categories from Backend
  useEffect(()=>{
    if(isRun != true){//Make sure it only runs once
       axios.get(`http://localhost:3001/get-categories`).then((res)=>{
      setCategories(res.data);//Set categories to array retrieved from server
      console.log(res.data);
    })
    setIsRun(true);//Set variable that says it has retrieved categories
    }
   
  })

  return (
    <>{isRun && (//Only render if axios call has been made
    <div className="tabcontainer">
      <Tabs variant="tabs" defaultActiveKey="1" id="forumtabs-demo" className="mb-3">
        {//Beginning of Dynamic Categories
        categories.map((item)=>(
            <Tab eventKey={item.cat_id} title={item.name} key={item.cat_id}>
            <div> 
              <TabForums cat_id={item.cat_id}/>
            </div>
          </Tab>    
          
          
          
           ))//End of Dynamic Categories
        }
        {/* <TabContent></TabContent> */} 

      </Tabs>
      {getCookie() != null ? <ThreadForm categories={categories}/> :<p style={styleObject}><a href="/login">Login to Create Thread</a></p> }
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