import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const [favOrigin, setFavOrigin] = useState(["characters", "locations", "episodes"]);
	const navigate = useNavigate();
	
	const handleFavBtn = (id, favOrigin) => {
		console.log(id);
		console.log(favOrigin);
		// if (favOrigin === "characters") {
			const favName = store.characters[id].name;
			console.log(favName);
			actions.addFavourite(favName);
			setFavOrigin(null);
		// }
		// if (favOrigin === "locations") {
		// 	const favName = store.locations[id].name;
		// 	console.log(favName);
		// 	actions.addFavourite(favName);
		// 	setFavOrigin(null);
		// }
		// if (favOrigin === "episodes" ) {
		// 	const favName = store.episodes[id].name;
		// 	console.log(favName);
		// 	actions.addFavourite(favName);
		// 	setFavOrigin(null);
		// }
		
	}

	const handleLearnBtn = (id) => {
		const singleChar = store.characters[id];
   		actions.setSingleCharacter(singleChar);
   		navigate(`/single/${id}`);

	}

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
						gender={`Gender: ${character.gender}`} handleLearnBtn={() => handleLearnBtn(character.id - 1)}
						handleFavBtn={() => {handleFavBtn(character.id - 1)}}
						/>
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
						type={`Type: ${location.type}`} dimension={`Dimension: ${location.dimension}`}
						handleLearnBtn={() => handleLearnBtn()}
						handleFavBtn={() => {handleFavBtn(location.id - 1)}}/>
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
						airDate={`Air date: ${episode.air_date}`} episode={`Episode: ${episode.episode}`}
						handleLearnBtn={() => handleLearnBtn()}
						handleFavBtn={() => {handleFavBtn(episode.id - 1)}}/>
						)
					})
				}
			</div>

		</div>
		

		
		
		
		
	</div>
)
}
