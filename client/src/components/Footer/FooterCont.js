import React, { Component } from "react";
import { Container, Row, Col} from 'reactstrap';
import "./Footer.css";


class Footer extends Component {
  render() {
    return (
      <div>
       <Container className="footer px-4 py-3" fluid>
        <Row className="d-flex justify-content-center">
          Clicky React Game
        </Row>
      </Container>
      </div>
    );
  }
}



export default Footer;


