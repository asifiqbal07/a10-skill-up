import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Course = ({course}) => {
    const {image_url, name} = course;
    console.log(course);
    return (
        <div>
            <Col className='p-2'>
                <Card className='shadow-sm'>
                    <Card.Img className='' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;