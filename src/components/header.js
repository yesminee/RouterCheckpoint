import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";

export const Header = () => {
    return (
      <div>
        <>
          <Navbar className="nv" bg="light" variant="light">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <p className="noo">Home</p>
              </Nav.Link>
              <Nav.Link href="#features">
                <p className="noo">Features</p>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <p className="noo">Contact</p>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button className="btnn" variant="outline-primary">
                Search
              </Button>
            </Form>
          </Navbar>
        </>
      </div>
    );
};
export default Header;
