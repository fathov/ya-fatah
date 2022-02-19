import logo from "./logo.svg";
import "./App.css";
import { Button, Form, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Cr7 craziest skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Best Goals</Nav.Link>
          </Nav.Item>
        </Nav>
        <img
          src="https://th.bing.com/th/id/R.d20ba2bcf303c7d08807b5390673b019?rik=6K0hVtDo6lrKkw&riu=http%3a%2f%2fcdn.thinglink.me%2fapi%2fimage%2f840020799665471489%2f1024%2f10%2fscaletowidth%2f0%2f0%2f1%2f1%2ffalse%2ftrue%3fwait%3dtrue&ehk=y2OYDmXlTyDcA9%2fwMdlHyq6f38zvNKIjEs70jE56lD0%3d&risl=&pid=ImgRaw&r=0"
          className="App-logo"
          alt="logo"
        />
        <p>
          The king. The big CR7. The best soccer player in the milky way. Join
          us on the CR7 fans forum !
        </p>

        <Button variant="primary">Primary</Button>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}
export default App;
