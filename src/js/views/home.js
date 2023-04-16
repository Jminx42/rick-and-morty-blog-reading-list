import React, { useContext, useState } from "react";

import "../../styles/home.css";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const {store, actions} = useContext(Context);
	

	return (
	<div className="text-start mt-5">
		<div className="container characters">
			<div className="row">
				<h2>Characters</h2>
			</div>
		
			<div className="row flex-nowrap overflow-scroll">
				{
					store.characters.map((character) => {
						return (
						<Card key={character.id} name={character.name} image={character.image} 
						status={`Status: ${character.status}`} species={`Species: ${character.species}`} 
						gender={`Gender: ${character.gender}`}
						onMouseEnter={() => {
							actions.setHoveredIndex(index);
						  }}
						  onMouseLeave={() => setHoveredIndex(null)}/>
						)
					})
				}
			</div>

		</div>
		<div className="container locations">
			<div className="row">
				<h2>Locations</h2>
			</div>
		
			<div className="row flex-nowrap overflow-scroll">
				{
					store.locations.map((location) => {
						return (
						<Card key={location.id} name={location.name} image={"https://placehold.jp/400x200.png"} 
						type={`Type: ${location.type}`} dimension={`Dimension: ${location.dimension}`}/>
						)
					})
				}
			</div>

		</div>
		<div className="container episodes">
			<div className="row">
				<h2>Episodes</h2>
			</div>
		
			<div className="row flex-nowrap overflow-scroll">
				{
					store.episodes.map((episode) => {
						return (
						<Card key={episode.id} name={episode.name} image={"https://placehold.jp/400x200.png"} 
						airDate={`Air date: ${episode.air_date}`} episode={`Episode: ${episode.episode}`}/>
						)
					})
				}
			</div>

		</div>
		

		
		
		
		
	</div>
)
}
