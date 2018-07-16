import React, { Component } from "react";
import { Container, Row, Col} from 'reactstrap';
import "./NavBar.css";


class NavBar extends Component {
  render() {
    return (
      <div>
         <Container color="info" className="topbar px-4 py-3" fluid>
       <Row>
       <Col md="3">
          Clicky React Game</Col>
         <Col md="6" className="midtop">
         Click On An Image To Start
         </Col>
         <Col md="3">
         Score: 0 | Top Score: 0
         </Col>
         </Row>
      </Container>
      </div>
    );
  }
}



export default NavBar;


