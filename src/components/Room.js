import React, { useState } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="row bs">
        <div className="col-md-4">
          <img src={room.imageurls[0]} className="smallimg" />
        </div>
        <div className="col-md-7 text-left">
          <h1>{room.name}</h1>
          <b>
            <p>Capacidade : {room.maxcount}</p>
            <p>Contato : {room.phonenumber}</p>
            <p>Padrão : {room.type}</p>
          </b>

          <div style={{ float: "right" }}>
            <Link to={`/book/${room._id}`}>
              <button className="btn btn-primary m-2">Reservar Agora</button>
            </Link>
            <button className="btn btn-primary" onClick={handleShow}>
              Ver Detalhes
            </button>
          </div>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header>
              <Modal.Title>{room.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                {room.imageurls.map((url) => {
                  return (
                    <Carousel.Item>
                      <img className="d-block w-100 bigimg" src={url} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <p>{room.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Room;
