import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Akshay Lingayat </span>
            <p> I currently work as a Managing Consultant @IBM and am looking to transition into the product management space.</p>
            <br />
            Apart from playing around with new tech and serving as associate product manager for several products I also like to:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Excercise - seriously any sport, you name it I'm game
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating, lowkey plug @CheatDayDC
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading self-improvement books
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
