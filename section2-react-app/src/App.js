import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { Footer } from './components/footer';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
