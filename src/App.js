import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand href="#home">Spinny</Navbar.Brand>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
