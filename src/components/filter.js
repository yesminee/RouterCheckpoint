import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Form, FormControl } from "react-bootstrap";
const Filter = ({ title, handleSearch, handleStarRating, rate }) => {
    return (
      <div style={{ width: "25rem", marginTop: "50px", marginLeft: "100px", marginBottom: "50px" }}>
        <Form className="d-flex justify-content-center">
          <FormControl
            type="text"
            value={title}
            onChange={handleSearch}
            placeholder="choose a movie title"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "100px",
            }}
          >
            {[...Array(5)].map((elm, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    style={{ display: "none" }}
                    value={ratingValue}
                    onClick={handleStarRating}
                  />
                  <BsStarFill
                    color={ratingValue <= rate ? "yellow" : "grey"}
                    size="25px"
                  />
                </label>
              );
            })}
          </div>
        </Form>
      </div>
    );
};

export default Filter;