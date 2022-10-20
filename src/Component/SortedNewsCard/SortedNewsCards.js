import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const SortedNewsCards = ({ briefNews }) => {
    console.log(briefNews)
    return (
        <Card className="mb-5">
            <Card.Header className="d-flex align-items-center">
                <Image roundedCircle={true} style={{ width: '40px', height: '40px' }} src={briefNews.author.img} />
                <div>
                    <span className="ms-2">{briefNews.author.name}</span> <br></br>
                    <small><span className='ms-2'>Published on {briefNews.author.published_date}</span>
                    </small>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={briefNews.image_url} />
                <Card.Title>{briefNews.title}</Card.Title>
                <Card.Text>
                    {briefNews.details.length > 250 ?
                        briefNews.details.slice(0, 250) + '...'
                        :
                        briefNews.details}
                    <Link to={`/news/${briefNews._id}`} variant="link">Read More</Link>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <small><span>Rating : {briefNews.rating.number}</span></small>
                <small><span>Totalview: {briefNews.total_view}</span></small>
            </Card.Footer>
        </Card>
    );
};

export default SortedNewsCards;