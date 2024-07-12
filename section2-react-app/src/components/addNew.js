import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
    const [classes, setClasses] = useState();
    const [sName, setSName] = useState();
    const [sAge, setSAge] = useState();
    const [sClass, setSClass] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        // Call API at end-point: http://localhost:9999/classes
        fetch("http://localhost:9999/classes")
            .then(res => res.json())
            .then(result => setClasses(result))
            .catch(err => console.log(err));

    }, []);

    function handleAddNew(){
        const newStudent = {
            name: sName,
            age: sAge,
            class: sClass
        };

        // Call API to insert DB
        fetch("http://localhost:9999/students", {
            method: "POST",
            body: JSON.stringify(newStudent),
            headers: {"Content-Type": "application/json"}
        })
            .then(res => res.json())
            .then(() => {
                alert("Add new success");
                navigate("/");
            });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/">Back to List</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Student name</Form.Label>
                            <Form.Control onChange={e => setSName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" 
                                 onChange={e => setSAge(parseInt(e.target.value))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Class</Form.Label>
                            <Form.Select onChange={e => setSClass(parseInt(e.target.value))}>
                                <option value="0" key={0}>-- Choose a class --</option>
                                {
                                    classes?.map(c => 
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button onClick={() => handleAddNew()}>
                                    Create
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
}