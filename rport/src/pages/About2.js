import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About2() {
  return (
    <div>
      <Hero backgroundImage="https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/MattPew.jpg">
        <h1>Project 1</h1>
        <h2>Bible Art</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Art Inspired by the Bible!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <img src="https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/BibleArtSnapshot.png" alt="Bible Art" width="400" height="300">
          </img>
          <form><button class="btn" type="submit" formaction="https://glacial-falls-40496.herokuapp.com/" target="_blank">Check it out</button></form>
        
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About2;