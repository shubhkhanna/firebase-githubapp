import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "reactstrap";
import firebase from "firebase/app";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        });
      })
      .catch((err) => {
        console.log(err);
        toast(err.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <Container className="text-center mt-5 pt-2">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="bg-dark text-white">
                SignIn here
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email Here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password Here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <Button type="submit" color="primary">
                  Sign In
                </Button>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
