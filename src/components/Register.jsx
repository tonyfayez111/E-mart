import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passconf, setPassConf] = useState(false);
  const [name, setName] = useState("");

  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlepass = (e) => {
    setPass(e.target.value);
  };
  const handlepassconf = (e) => {
    if (e.target.value === pass) setPassConf(true);
    else setPassConf(false);
  };
  const handlename = (e) => {
    setName(e.target.value);
  };
  const handlecreatacc = (e) => {
    e.preventDefault();
    if (passconf) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // created
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          onChange={handlename}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={handleemail}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={handlepass}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={handlepassconf}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={handlecreatacc}
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <NavLink
                          to="/login"
                          className="btn btn-outline-dark ms-2 "
                        >
                          <i className="fa "></i> Sign in
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
