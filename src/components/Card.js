import React from 'react'
import ReactStars from "react-stars";
//create movie cards
function Card({ moviesArray, openModal, deleteMovie }) {
  return (
    <>
    {
      moviesArray.map((item) => (
        <div key={item.id} className="card">
          <button className="cardButton" onClick={openModal}  >
            <div className="image">
              <img alt={item.title} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}></img>
            </div>
          </button>
          <div className="title">
            <p>{item.title}</p>
          </div>
          <div className="info">
            <div className="stars">
              {/* react-stars Library */}
              <ReactStars color2={"black"} color1={"gray"} count={5} size={30} value={item.vote_average / 2} half={true} edit={false} />
            </div>
            <div className="point">
              <p>{item.vote_average}</p>
            </div>
          </div>
          <button onClick={deleteMovie} className="deleteButton">Delete Movie</button>
        </div>
      ))
    }
    
    </>
  )
}

export default Card;
