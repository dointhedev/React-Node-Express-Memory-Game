import React from "react";
import {Container, Row, Col} from 'reactstrap';
import "./NavBar.css";

const NavBar = props => (
    <div>
        <Container color="info" className="topbar px-4 py-3" fluid>
            <Row>
                <Col md="3" className="text-center text-md-left">
                    Clicky React Game</Col>
                <Col md="6" className="midtop">
                    Click On An Image To Start
                </Col>
                <Col md="3" className="text-center text-md-left">
                    Score: {props.count} | Top Score: {props.topScore}
                </Col>
            </Row>
        </Container>
    </div>
)

export default NavBar;
