import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Content() {
    const [students, setStudents] = useState([]);
    const [classes, setClasses] = useState([]);
    const [classId, setClassId] = useState(null);

    useEffect(() => {
        // Call API at end-point: http://localhost:9999/students
        fetch("http://localhost:9999/students")
            .then(res => res.json())
            .then(result => {
                if(classId){
                    setStudents(result.filter(s => s.class == classId));
                }else{
                    setStudents(result);
                }
            })
            .catch(err => console.log(err));

        // Call API at end-point: http://localhost:9999/classes
        fetch("http://localhost:9999/classes")
            .then(res => res.json())
            .then(result => setClasses(result))
            .catch(err => console.log(err));

    }, [classId]);


    // Delete a student
    function handleDelete(studentId){
        if(window.confirm("Do you want to delete?")){
            fetch("http://localhost:9999/students/"+studentId, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(() => {
                    alert("Delete success");
                    window.location.reload();
                })
                .catch(() => alert("Delete failse"));
        }
    }

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
                            <Link to={"/student/add"}>Add new a Student</Link>
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
                                            <tr key={s?.id}>
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
                                                    <Link to={"/"} onClick={()=>handleDelete(s?.id)}>
                                                        Delete
                                                    </Link>
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
                            <li key={c.id}>
                                <Link to="/" 
                                    onClick={ ()=>setClassId(c.id) }>
                                    {c.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </Col>
        </Row>
    );
}