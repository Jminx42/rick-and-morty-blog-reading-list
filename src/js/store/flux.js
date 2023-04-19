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
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setStore({ characters: data.results });
      },

      getAllLocations: async () => {
        const response = await fetch(
          "https://rickandmortyapi.com/api/location"
        );
        const data = await response.json();
        setStore({ locations: data.results });
      },

      getAllEpisodes: async () => {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        setStore({ episodes: data.results });
      },

      setFavourite: (name) => {
        const favs = getStore().favouritesList;
        if (!favs.includes(name)) {
          setStore({ favouritesList: [...favs, name] });
        } else {
          setStore({ favouritesList: favs.filter((fav) => fav !== name) });
        }
      },
    },
  };
};

export default getState;
