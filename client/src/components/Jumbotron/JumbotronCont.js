import React, { Component } from "react";
import { Container, Jumbotron} from 'reactstrap';
import "./Jumbotron.css";


class JumboTron extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container className="text-center pt-5 pb-3" fluid>
            <h1 className="display-3">Clicky Game!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}



export default JumboTron;


