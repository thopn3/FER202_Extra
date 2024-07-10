import { Col, Container, Row, Table } from "react-bootstrap";

export default function Content({data1, data2}){
    return (
        <Row>
            <Col md={10}>
                <Container fluid>
                    <Row>
                        <Col>
                            <h2>List of students</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered striped hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data1?.map(s => (
                                            <tr>
                                                <td>{s?.id}</td>
                                                <td>{s?.name}</td>
                                                <td>{s?.age}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col md={2}>Right content</Col>
        </Row>
    );
}