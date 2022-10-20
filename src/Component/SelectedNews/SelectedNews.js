import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/esm/Image';
const SelectedNews = () => {
    const selectedNews = useLoaderData()[0]
    return (
        <Card>
            <Card.Img variant="top" src={selectedNews.image_url} />
            <Card.Header className="d-flex justify-content-around align-items-center">
                <Image src={selectedNews.author.img} roundedCircle={true} style={{ width: '40px', height: '40px' }}></Image>
                <span>{selectedNews.author.name}</span>
                <span>{selectedNews.author.published_date}</span>
            </Card.Header>
            <Card.Body>

                <Card.Text>
                    <Card.Title>{selectedNews.title}</Card.Title>
                    <span>{selectedNews.details}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SelectedNews;