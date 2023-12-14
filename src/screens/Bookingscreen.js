import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Bookingscreen() {
  const { roomid } = useParams();
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (
          await axios.post(`/api/rooms/getroombyid`, {
            roomid: roomid,
          })
        ).data;

        setRoom(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cancelar ou limpar qualquer coisa que precisa ser limpa ao desmontar o componente
    };
  }, [roomid]);

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg2" alt="Room" />
            </div>

            <div className="col-md-5">
              <div style={{ textAlign: "right" }}>
                <h1>Detalhes Da Reserva</h1>
                <hr />

                <b>
                  <p>Nome : </p>
                  <p>De : </p>
                  <p>Até : </p>
                  <p>Ocupação Máxima : {room.maxcount}</p>
                </b>
              </div>

              <div style={{ textAlign: "right" }}>
                <h1>Total</h1>
                <hr />
                <p>Dias reservados : </p>
                <p>Valor da diaria : {room.rentperday}</p>
                <p>Total a pagar : </p>
              </div>

              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pagar Agora</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Bookingscreen;
