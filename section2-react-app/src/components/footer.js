import { Row, Col } from "react-bootstrap";

function Footer(){
    return (
        <Row>
            <Col style={{textAlign: "center", background: "green", color: "white"}}>
                Footer content
            </Col>
        </Row>
    );
}

export {Footer}