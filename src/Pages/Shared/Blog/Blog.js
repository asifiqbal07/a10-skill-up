import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../../RightSideNav/RightSideNav';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="8">
                        <h2>Let's check out Latest <span className='text-danger'>Blogs.</span></h2>
                        <Accordion className='mt-3'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='fw-semibold'>#1 What is CORS?</span></Accordion.Header>
                                <Accordion.Body>
                                    CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content at www.example.com and the backend API at api.example.com. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.
                                    This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.
                                    There's a lot of terrible advice out there (especially on popular forums) on how to set this up where the answers generally include some variant of brutally setting wildcard "*" response headers regardless of the request headers provided in the pre-flight request. This article attempts to dispel some of the common misconceptions about Cross-Origin Resource Sharing and provide useful advice on how to get things working correctly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span className='fw-semibold'>#2 Why are you using Firebase? What other options do you have to implement authentication?</span></Accordion.Header>
                                <Accordion.Body>
                                    Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment. <br />
                                    Firebase offers a number of services, including:
                                    <ul>
                                        <li>Analytics – Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events. Analytics presents data about user behavior in iOS and Android apps, enabling better decision-making about improving performance and app marketing.</li>
                                        <li>Authentication – Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as well as Google, Facebook, GitHub, Twitter login and more.</li>
                                        <li>Cloud messaging – Firebase Cloud Messaging (FCM) is a cross-platform messaging tool that lets companies reliably receive and deliver messages on iOS, Android and the web at no cost.</li>
                                    </ul>
                                    <h6>Alternatives of Firebase:</h6>
                                    <ul>
                                        <li>MongoDB.</li>
                                        <li>Oracle Database.</li>
                                        <li>Amazon Redshift.</li>
                                        <li>Redis Enterprise Cloud.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span className='fw-semibold'>#3 How does the private route work?</span></Accordion.Header>
                                <Accordion.Body>
                                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.Setting up the React Application: Create a React application using create-react-app and lets call it geeks.
                                    Setting up the React Application: Create a React application using create-react-app and lets call it geeks.Your development environment is ready. Let us now install React Router in our Application.
                                    Installing React Router: React Router can be installed via npm in your React application. Follow the steps given below to install Router in your React application: <br /><br />
                                    Step 1: cd into your project directory i.e geeks. <br /><br />
                                    Step 2: To install the React Router use the following command:After installing react-router-dom, add its components to your React application. <br /><br />

                                    Adding React Router Components: The main Components of React Router are:<br /><br />

                                    BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.<br /><br />
                                    Routes: It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:<br /><br />
                                    Relative s and s
                                    Routes are chosen based on the best match instead of being traversed in order.<br /><br />
                                    Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.<br /><br />
                                    Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.<br /><br />
                                    To add React Router components in your application, open your project directory in the editor you use and go to app.js file. Now, add the below given code in app.js.

                                    Note: BrowserRouter is aliased as Router.

                                    Using React Router: To use React Router, let us first create few components in the react application. In your project directory, create a folder named component inside the src folder and now add 3 files named home.js, about.js and contact.js to the component folder.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span className='fw-semibold'>#4 What is Node? How does Node work?</span></Accordion.Header>
                                <Accordion.Body>
                                    The Node.js run-time environment includes everything you need to execute a program written in JavaScript.Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
                                    Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                                    Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
                                    We already discussed the first line of this definition: “Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.” Now let’s understand the other two lines so we can find out why Node.js is so popular.
                                    I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API.
                                    I/O takes time and hence blocks other functions.
                                    Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg="4">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;