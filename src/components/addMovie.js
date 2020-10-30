import React, { useState } from "react";
import { Button, Form, Col, Modal, Card } from "react-bootstrap";

const AddMovie = ({ cardsInfo, setCardsInfo }) => {
  const [movie, setMovie] = useState({
    title: "",
    rate: 1,
    description: "",
    posterUrl: "",
    imgSrc: "",
  });
  const onChangeMovie = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const submitMovie = (e) => {
    e.preventDefault();
    setCardsInfo([...cardsInfo, movie]);
    setMovie({
      title: "",
      rate: 1,
      description: "",
      posterUrl: "",
      imgSrc: "",
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{ width: "18rem", margin: 10, backgroundColor: "#600080" }}
        className="text-center text-white "
      >
        <Card.Body style={{ size: "80px"}}>
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ marginTop: 5 }}
          >
            Add a Movie
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={submitMovie}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                      name="title"
                      value={movie.title}
                      onChange={onChangeMovie}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      max="5"
                      placeholder="Rating"
                      name="rate"
                      value={movie.rate}
                      onChange={onChangeMovie}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    placeholder="Description"
                    name="description"
                    value={movie.description}
                    onChange={onChangeMovie}
                  />
                </Form.Group>
                <Form.Group controlId="formGridImgUrl">
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control
                    placeholder="Image Url"
                    name="imgSrc"
                    value={movie.imgSrc}
                    onChange={onChangeMovie}
                  />
                </Form.Group>
                <Form.Group controlId="formGridPostUrl">
                  <Form.Label>Poster Url</Form.Label>
                  <Form.Control
                    placeholder="Poster Url"
                    name="posterUrl"
                    value={movie.posterUrl}
                    onChange={onChangeMovie}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Save Changes
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};


export default AddMovie;