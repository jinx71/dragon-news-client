import React from 'react';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook, BsTwitter, BsTwitch, BsDiscord } from 'react-icons/bs';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import RightBrandCarousal from '../RightBrandCarousal/RightBrandCarousal';
const RightSideNavigation = () => {
    return (
        <div>
            <div>
                <Button variant="outline-primary"> <FcGoogle /> Login With Google</Button>
                <Button variant="outline-dark"> <BsGithub /> Login With Github</Button>
            </div>
            <ListGroup>
                <ListGroup.Item><Link to="/"><BsFacebook />Facebook</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/"><BsGithub />Github</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/"><BsTwitter />Twitter</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/"><BsTwitch />Twitch</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/"><BsDiscord />Discord</Link></ListGroup.Item>
            </ListGroup>
            <RightBrandCarousal></RightBrandCarousal>
        </div >
    );
};

export default RightSideNavigation;