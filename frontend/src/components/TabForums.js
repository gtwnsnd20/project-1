import React from "react";
import { Card, Tab, Tabs, } from 'react-bootstrap';
import { ThreeDots } from "react-bootstrap-icons";

const ForumTabs = () => {
  return (
    <div className="tabcontainer">
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
    </div>
  );
}
export default ForumTabs;