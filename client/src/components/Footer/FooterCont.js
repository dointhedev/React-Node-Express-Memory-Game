import React from "react";
import {Container, Row} from 'reactstrap';
import "./Footer.css";

const Footer = props => (
    <div>
        <Container className="footer px-4 py-3" fluid>
            <Row className="d-flex justify-content-center">
                Clicky React Game
            </Row>
        </Container>
    </div>
);

export default Footer;
