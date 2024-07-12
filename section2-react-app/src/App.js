import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { Footer } from './components/footer';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudent from './components/addNew';

function App() {
  
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/student' element={<Content/>} />
          <Route path='/student/add' element={<AddStudent/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
