import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card m-2 g-0" style={{ width: "18rem" }}>
      <img
        src={item.image ? item.image : "https://placehold.jp/400x200.png"}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        {item.gender ? (
          <>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
            <p>Gender: {item.gender}</p>
          </>
        ) : item.air_date ? (
          <>
            <p>Air date: {item.air_date}</p>
            <p>Episode: {item.episode}</p>
          </>
        ) : (
          <>
            <p>Type: {item.type}</p>
            <p>Dimension: {item.dimension}</p>
          </>
        )}
        <div className="d-flex justify-content-between align-items-end">
          <Link
            to={`/single/${item.id}/${
              item.gender ? "character" : item.air_date ? "episode" : "location"
            }`}
          >
            <button type="button" className="btn btn-outline-primary">
              Learn more!
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => actions.setFavourite(item.name)}
          >
            {store.favouritesList.includes(item.name) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
