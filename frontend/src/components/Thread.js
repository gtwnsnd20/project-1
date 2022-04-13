import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import axios from "axios"

const ForumTabsDemo = () => {
  const [posts,setPosts] = useState([]);
  const [isRun, setIsRun] = useState(false);
  const thread_name="anime";//REPLACE THIS WITH PROPS OR OTHER VALUE TO Label Thread
  const thread_id=1;//REPLACE THIS WITH PROPS OR OTHER VALUE TO GET RELEVANT POSTS

  //const posts =[{username:"hunterrisse",content:"Lorem Ipsum",post_date:"Today"}]
  //On load, get posts
  useEffect(()=>{
    if(isRun != true){
       axios.get(`http://localhost:3001/get-posts?thread_id=${thread_id}`).then((res)=>{
      setPosts(res.data)
    })
    setIsRun(true);
    }
   
  })

  return (
    <div className="tabcontainer">
      <div>
        <h1>{thread_name}</h1>
      </div>
      <br />
      <div>
      {//Begin Dynamic Posts
        posts.map(item =>(
          <Card key={item.post_id}>
          <Card.Header as="div" className="cardheader">
           Author:{item.username} Posted:{item.post_date}
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="text-muted">
              {item.content}
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer className="cardheader">
            <div className="mx-auto justify-content-end text-end">
              <Button type="button" color="#a1b5d8" size={30}>
                Reply
              </Button>
            </div>
          </Card.Footer>
        </Card>


        ))
      }
      </div>
    </div>
  );
};
export default ForumTabsDemo;
