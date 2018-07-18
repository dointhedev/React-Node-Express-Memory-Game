import React from "react";
import {Container, Jumbotron} from 'reactstrap';
import "./Jumbotron.css";

const JumboTron = props => (
            <div>
                <Jumbotron className="jumbo" fluid>
                    <Container className="jumbcont text-center" fluid>
                        <h1 className="display-4">Clicky Game!</h1>
                        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                    </Container>
                </Jumbotron>
            </div>
        );

export default JumboTron;

