import React, { Component } from "react";
import { Container, Row, Col} from 'reactstrap';
import MemoryGrid from "./MemoryGrid";
import thumbs from "./MemoryGrid.json";

class MemoryGridCont extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    thumbs
  };

  HandleImageClick = () => {
    alert(`Click Worked`)
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <Container className="memory d-flex justify-content-center">
        <Row>
      
          {this.state.thumbs.map(image => (
                <Col lg="3" md="4" xs="6"  className="pb-4">
          <MemoryGrid
            onclick={this.HandleImageClick}
            id={image.id}
            key={image.id}
            image={image.image}
          />
            </Col>
        ))}
    
        </Row>
      </Container>
    );
  }
}

export default MemoryGridCont;
