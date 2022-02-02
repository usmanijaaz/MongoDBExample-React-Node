import React from "react";
import { FormControl, Container, Row, Col } from "react-bootstrap";

function SearchJob(props) {
    let callback = props.callback;
    return (
        <Container>
            <Row>
                <Col>
                    <FormControl
                        type="text"
                        placeholder="Search Job"
                        onChange={(event) => {
                            console.log(event.target.value);
                            callback({ string: event.target.value });
                        }}
                    ></FormControl>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchJob;
