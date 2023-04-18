import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Single = () => {
  const params = useParams();
  const [item, setItem] = useState({});

  const getSingleElement = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/${params.thetype}/${params.theid}`
    );
    const data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    getSingleElement();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center display-3 p-3">{item.name}</h2>
        <div className="col-6 text-center ">
          <img src={item.image} />
        </div>
        <div className="col-1">
          {Object.keys(item).map((itemKey, index) => {
            if (
              typeof item[itemKey] !== "object" &&
              itemKey !== "created" &&
              itemKey !== "type"
            ) {
              return <p key={index}> {itemKey.toUpperCase()}:</p>;
            }
          })}
        </div>
        <div className="col-3">
          {Object.keys(item).map((itemKey, index) => {
            if (
              typeof item[itemKey] !== "object" &&
              itemKey !== "created" &&
              itemKey !== "type"
            ) {
              return <p key={index}>{item[itemKey]}</p>;
            }
          })}
        </div>
      </div>

      <Link to="/">
        <div className="col-2 ms-auto">
          <button className="btn btn-primary btn-lg m-3" href="#" role="button">
            Back home
          </button>
        </div>
      </Link>
    </div>
  );
};
