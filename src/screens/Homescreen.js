import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.get("./api/rooms/getallrooms")).data;

        setrooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error.response); // Log the response object
        setloading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cancelar ou limpar qualquer coisa que precisa ser limpa ao desmontar o componente
    };
  }, []); // Dependência vazia para garantir que o efeito ocorra apenas uma vez durante a montagem do componente

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
