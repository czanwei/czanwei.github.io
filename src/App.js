import logo from './logo-dusty-pink.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="home App-header">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src={ logo } width="70" height="70" className="d-inline-block align-top" alt="czanwei website logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <code className="App-title">Hello World<span className="App-blink">_</span></code>
        <div className="App-desc">
          <h3 className="App-name">Chong Zan-Wei (Sean)</h3>
          <p className="App-quote"><small>be</small> Curious, <small>stay</small> Humble!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
