import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import ressources from "../ressources";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieTrailer = ({ match }) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        setMovie(ressources.find((movie) => movie.id === +match.params.id));
    }, [match.params.id]);

    return movie ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
                style={{ width: "fitContent", background: "rgba(0,0,0,0.4)" }}
                className="text-center  text-white "
            >
                <Card.Header>
                    {movie.title}
                    <br />
                    {[...Array(movie.rate)].map((elm, i) => (
                        <BsStarFill color="yellow" key={i} />
                    ))}
                </Card.Header>
                <Card.Body>
                    <iframe
                        width="560"
                        height="315"
                        src={movie.trailerLink}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={movie.title}
                    ></iframe>
                    <Card.Text>{movie.description}</Card.Text>
                    <Link to="/">
                        <Button variant="primary">Go Back </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    ) : (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <h1 style={{ color: "white" }}>Error 404 Not Found </h1>
        <Link to="/">
            <Button variant="primary">Go Back </Button>
        </Link>
    </div>
        );
};

export default MovieTrailer;