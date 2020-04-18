import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/MattPew.jpg">
        <h1>Matt Wester</h1>
        <h2>Profile Assignment with React</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Matthew is in a program learning to become a full-stack MERN developer.
            </p>
            <p>
              This is a very simple exact of a React site.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
