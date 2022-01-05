import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { BsDot } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Akshay Lingayat </span>
            <p> I currently work as a Managing Consultant @IBM Consulting and am looking to transition into the product management space.</p>
            <br />
            Apart from playing around with new tech and managing several programs I also like to:
          </p>
          <ul>
            <li className="about-activity">
              <BsDot /> Excercise - seriously any sport, you name it I'm game
            </li>
            <li className="about-activity">
              <BsDot /> Eating: @CheatDayDC
            </li>
            <li className="about-activity">
              <BsDot /> Reading self-improvement books
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
