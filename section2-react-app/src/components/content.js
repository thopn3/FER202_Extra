import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Content() {
    const [students, setStudents] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Call API at end-point: http://localhost:9999/students
        fetch("http://localhost:9999/students")
            .then(res => res.json())
            .then(result => setStudents(result))
            .catch(err => console.log(err));

        // Call API at end-point: http://localhost:9999/classes
        fetch("http://localhost:9999/classes")
            .then(res => res.json())
            .then(result => setClasses(result))
            .catch(err => console.log(err));

    }, []);

    return (
        <Row>
            <Col md={10}>
                <Container fluid>
                    <Row>
                        <Col>
                            <h2>List of students</h2>
                        </Col>
                    </Row>
                    <Row className="mt-3 mb-3">
                        <Col>
                            <a href="#">Add new a Student</a>
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
                                        <th>Class</th>
                                        <th colSpan={2}>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students?.map(s => (
                                            <tr>
                                                <td>{s?.id}</td>
                                                <td>{s?.name}</td>
                                                <td>{s?.age}</td>
                                                <td>
                                                    {
                                                        classes?.find(c => c.id === s.class)?.name
                                                    }
                                                </td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                                <td>
                                                    <a href="#">Delete</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col md={2}>
                <h4>Classes</h4>
                <ul>
                    {
                        classes?.map(c => 
                            <li key={c.id} value={c.id}>
                                <a href="#">{c.name}</a>
                            </li>
                        )
                    }
                </ul>
            </Col>
        </Row>
    );
}