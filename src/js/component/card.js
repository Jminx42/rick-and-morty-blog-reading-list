import React from 'react'

const Card = ({ name, image }) => {
  return (
        <div className="card m-2 g-0" style={{width: "18rem"}}>
          <img src={{image} !== "" ? {image} : "https://placehold.jp/400x200.png"} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> 
  )
}

export default Card;