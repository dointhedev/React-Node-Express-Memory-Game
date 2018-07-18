import React, {Component} from "react";
import {Container, Row, Col} from 'reactstrap';
import MemoryGrid from "./MemoryGrid";
import thumbs from "./MemoryGrid.json";

class MemoryGridCont extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbs: thumbs,
            selectedImages: []
        };
    }

    shuffle = (images) => {
        let randomized = [];
        let array = images;
        while (array.length !== 0) {
            let rIndex = Math.floor(array.length * Math.random());
            randomized.push(array[rIndex]);
            array.splice(rIndex, 1)
        }
        return randomized;
    };

    procClick = (id) => {
        const {selectedImages} = this.state;
        this.setState({
            selectedImages: [
                ...selectedImages,
                id
            ]
        });

        return selectedImages;
    };

    HandleImageClick = (e) => {
        // fisher yates shuff
        const ID = e.target.id;
        const {selectedImages, thumbs} = this.state;
        selectedImages.includes(ID)
            ? (this.setState({selectedImages: []}), this.props.resetCount(selectedImages))
            : (this.procClick(ID), this.props.increaseCount())
        this.setState({
            thumbs: this.shuffle(thumbs)
        })

    };
    render() {
        const {thumbs} = this.state;
        return (
            <Container className="memory d-flex justify-content-center">
                <Row>
                    {thumbs.map(image => (
                        <Col lg="3" md="4" xs="6" className="pb-4">
                            <MemoryGrid
                                onclick={this.HandleImageClick}
                                id={image.id}
                                key={image.id}
                                image={image.image}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default MemoryGridCont;
