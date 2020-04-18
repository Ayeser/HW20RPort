import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About4() {
  return (
    <div>
      <Hero backgroundImage="https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/MattPew.jpg">
        <h1>Eat the Burgers</h1>
        <h2>This is a site where you can eat the burgers virtually</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Eat the Burgers!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <img src="https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/BurgerEater.png" alt="Burger Eater" width="400" height="300">
          </img>
          <form><button class="btn" type="submit" formaction="https://fast-escarpment-48941.herokuapp.com/" target="_blank">Check it out</button></form>
        
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About4;
