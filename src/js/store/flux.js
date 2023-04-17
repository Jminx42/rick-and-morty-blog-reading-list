const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			episodes: [],

			favouritesList: [],
			
			singleCharacter: [],

		},
		actions: {
			getAllCharacters: async () => {
				const response = await fetch ("https://rickandmortyapi.com/api/character");
				const data = await response.json();
				setStore({characters: data.results});
			},
			
			getAllLocations: async () => {
				const response = await fetch ("https://rickandmortyapi.com/api/location");
				const data = await response.json();
				setStore({locations: data.results});
			},

			getAllEpisodes: async () => {
				const response = await fetch ("https://rickandmortyapi.com/api/episode");
				const data = await response.json();
				setStore({episodes: data.results});
			},

			addFavourite: (name) => {
				const store = getStore();
				const newFavList = [...store.favouritesList, name];
				console.log(newFavList);
				setStore({favouritesList: newFavList});

			},

			deleteFavourite: (name) => {
				const store = getStore();
				const newFavList = store.favouritesList.filter((fav) => fav !== name);
				setStore({favouritesList: newFavList});
			},

			setSingleCharacter: (singleChar) => {
				setStore({singleCharacter: singleChar})
			},
			
		}
	};
};

export default getState;
