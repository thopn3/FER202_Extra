import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { Footer } from './components/footer';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  let students = [
    {
      "id": 1,
      "name": "Nguyen Tuan Anh",
      "age": 30
    },
    {
      "id": 2,
      "name": "Pham Hoang Nguyen",
      "age": 25
    },
    {
      "id": 3,
      "name": "Tran Hong Hanh",
      "age": 21
    }
  ];

  let classes = ["SE1831", "SE1832", "SE1833"];

  return (
    <Container fluid>
      <Header />
      <Content data1={students} data2={classes} />
      <Footer />
    </Container>
  );
}

export default App;
