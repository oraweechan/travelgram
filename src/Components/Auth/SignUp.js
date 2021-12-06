import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Form } from "react-bootstrap";
import { TextField } from "@mui/material";

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "./ErrorNotice";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, name, username };
      await axios.post("https://travelgram-app-heroku.herokuapp.com/users/signup", newUser);
      const loginResponse = await axios.post(
        "https://travelgram-app-heroku.herokuapp.com/users/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      navigate("/feed");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
      <Container component="main">
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Paper
              className="w-responsive text-center mx-auto p-3 mt-2"
              elevation={3}
            >
              <Col sm={12}>
                <Typography fontFamily="'Poppins', sans-serif">
                  <h2>Create an Account</h2>
                </Typography>
                {error && (
                  <ErrorNotice
                    message={error}
                    clearError={() => setError(undefined)}
                  />
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" md="12"></Form.Label>
                    <Col sm="12">
                      <TextField
                        fullWidth
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        label="Email Address"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Col sm="12">
                      <TextField
                        required
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        label="Full Name"
                      />
                    </Col>
                  </Form.Group>

                  <Col sm="12">
                    <TextField
                      required
                      fullWidth
                      onChange={(e) => setUsername(e.target.value)}
                      name="username"
                      label="Username"
                    />
                  </Col>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="12"></Form.Label>
                    <Col sm="12">
                      <TextField
                        required
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        label="Password"
                      />
                    </Col>
                  </Form.Group>
                  <Button
                    style={{ backgroundColor: "#1A76D2" }}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
              </Col>
            </Paper>
            <Paper
              className="w-responsive text-center mx-auto p-3 mt-4"
              elevation={3}
            >
              <p>Already have an account?</p>
              <Link style={linkStyle} to="/signup">
                <Button
                  style={{ backgroundColor: "#1A76D2" }}
                  variant="contained"
                  size="medium"
                >
                  <Link style={linkStyle} to="/">
                    Sign In
                  </Link>
                </Button>
              </Link>
            </Paper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;
