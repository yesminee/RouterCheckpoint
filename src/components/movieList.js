import React from "react";
import MovieCard from "./movieCard";
import { CardGroup } from "react-bootstrap";
const MovieList = ({ cardsInfo }) => {
    return (
        <CardGroup style={{ justifyContent: "center" }}>
            {cardsInfo.map((elm,i) => (
                <MovieCard
                    title={elm.title}
                    rate={elm.rate}
                    imgSrc={elm.imgSrc}
                    description={elm.description}
                    posterUrl={elm.posterUrl}
                    id={elm.id}
                    key={i}
                />
            ))}
        </CardGroup>
    );
};
export default MovieList;
