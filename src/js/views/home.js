import React, { useContext, useState } from "react";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5">
      <h2 className="p-3 text-center">Characters</h2>

      <div className="row flex-nowrap overflow-scroll">
        {store.characters.map((character) => {
          return <Card key={character.id} item={character} />;
        })}
      </div>

      <h2 className="p-3 text-center">Locations</h2>

      <div className="row flex-nowrap overflow-scroll">
        {store.locations.map((location) => {
          return <Card key={location.id} item={location} />;
        })}
      </div>

      <h2 className="p-3 text-center">Episodes</h2>

      <div className="row flex-nowrap overflow-scroll">
        {store.episodes.map((episode) => {
          return <Card key={episode.id} item={episode} />;
        })}
      </div>
    </div>
  );
};
