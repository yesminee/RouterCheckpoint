import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterUrl, rate, imgSrc, details, id }) => {
    let rateDiv = [];
    for (let i = 0; i < rate; i++) {
        rateDiv.push(<BsStarFill color="yellow" key={i} />);
    }

    return (
      <div className="box">
        <Card
          style={{ width: "18rem", margin: 10, backgroundColor: "#d9d9d9" }}
          className="text-center text-white "
        >
          <Card.Header style={{ color: "#4a3f4d" }}>
            {title}
            <br />
            {rateDiv}
          </Card.Header>
          <Card.Body>
            <Card.Img src={imgSrc} style={{ height: 280 }} />
            <Card.Text style={{ color: "#4a1a57" }}>{description}</Card.Text>
            <Card.Text style={{ color: "#676569", size: "10px" }}>{details}</Card.Text>
            <Button variant="primary" href={posterUrl} target="_blank">
              Watch Now
            </Button>
            <Link to={`/${id}`}>
              <Button variant="secondary">Watch Trailer</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default MovieCard;