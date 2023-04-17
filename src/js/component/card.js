import React, { useState } from "react";


const Card = ({ name, image, status, species, gender, type, dimension, airDate, episode, handleLearnBtn, handleFavBtn }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
        <div className="card m-2 g-0" style={{width: "18rem"}}>
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {status ? <span>{status}<br/></span> : null} 
                {species ? <span>{species}<br/></span> : null} 
                {gender ? <span>{gender}<br/></span> : null} 
                {type ? <span>{type}<br/></span> : null}
                {dimension ? <span>{dimension}<br/></span> : null}
                {airDate ? <span>{airDate}<br/></span> : null}
                {episode ? <span>{episode}<br/></span> : null}
              </p>
              <div className="d-flex justify-content-between align-items-end">
                <button type="button" className="btn btn-outline-primary" 
                onClick={() => {handleLearnBtn(); setIsButtonClicked(true)}}>Learn more!</button>
                <button type="button" className="btn btn-outline-warning" 
                onClick={() => {handleFavBtn(); setIsButtonClicked(true)}}>
                  {
                    isButtonClicked ?
                    <i className="fa-solid fa-heart"></i>
                    :
                    <i className="fa-regular fa-heart"></i>}
                </button>
              </div>
              
          </div>
        </div> 
  )
}

export default Card;