import React from 'react'
import ReactModal from "react-modal";
import { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Modal({ modalChange, setModalChange, movies, title }) {
  //states
  const [movieObject, setMovieObject] = useState({
    id: 0,
    title: "",
    vote_average: 0,
    poster_path: "",
    overview: ""
  });
  const [alertMessage, setAlertMessage] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  //changes booleans for close modal
  const closeModal = (() => {
    setModalChange(false);
    setAlertMessage(true);
  })
  //edit the movie point if title and clicked title equals
  const editPoint = ((e) => {
    setMovieObject({
      ...movieObject,
      vote_average: e.target.value

    });
    setHasChanged(true);
    var inputMap = movies.map((item) => {
      if (item.title === movieObject.title) {
        item.vote_average = e.target.value;
      }
      return inputMap;
    });

  })
  //if titles are equal set new movie object
  useEffect(() => {
    var movieMap = movies.map((item) => {
      if (item.title === title) {
        setMovieObject({
          id: item.id,
          title: item.title,
          vote_average: item.vote_average,
          poster_path: item.poster_path,
          overview: item.overview
        })
      }
      return movieMap;
    })
  }, [title, movies])
 //shows Edit alert messages for 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setAlertMessage(false);
      setHasChanged(false);
    }, 3000)
  }, [alertMessage]);

  return (
    <div className="modalContainer">
      {/* if alertMessage and hasChanged are true shows Edited Successfully  */}
      {
        (alertMessage, hasChanged) && <p className="editText">Edited Successfully!<br></br>✓</p>
      }
      <ReactModal className="modal" isOpen={modalChange} ariaHideApp={false}>
        <div className="modalDiv">
          <div><button className="closeModalButton" onClick={closeModal}>x</button></div>


          <div className="modalInfo" key={movieObject.id}>Movie Information
            <div className="modalImage"><img alt={movieObject.title} src={`https://image.tmdb.org/t/p/w500${movieObject.poster_path}`}></img></div>
            <div className="modalTitle">{movieObject.title}</div>
            <div className="modalInput">Edit:<input onChange={editPoint} type="number" value={movieObject.vote_average}></input></div>
            <div className="modalOverview">{movieObject.overview.includes("Barbie")?movieObject.overview.substring(0,220)+"...":movieObject.overview}</div>
          </div>

        </div>
      </ReactModal>

    </div>
  )
}

export default Modal;
