
import { useEffect, useState } from 'react';
import Modal from "./Modal"
import Card from './Card';

function Movies() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState(false);
 // get data from Movie Apı and send to moviesArray
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=3a7dbea63189e68ce2bc94ebd6370a41&with_genres=16")
      .then((response) => response.json())
      .then((movie) => {
        setMoviesArray(movie.results);
      })
  }, [])
  //open movie information
  const openModal = ((e) => {
    setIsOpen(true);
    setTitle(e.target.alt)
  })
  //delete movie with parent element
  const deleteMovie = ((e) => {
    e.target.parentElement.remove();
    setAlertMessage(true);
  })
  //shows Delete alert messages for 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setAlertMessage(false);
    }, 3000)
  }, [alertMessage]);

  return (
    <>
      <Card moviesArray={moviesArray} openModal={openModal} deleteMovie={deleteMovie}></Card>
      {/* if alertMessage is true shows Deleted Successfully  */}
      {
        alertMessage === true && <p className="deleteMovieAlert">Deleted successfully!</p>
      }
      <Modal modalChange={isOpen} setModalChange={setIsOpen} title={title} movies={moviesArray} setMovies={setMoviesArray} />
    </>
  )
}

export default Movies;
