import { allFilms , showFilm } from "./filmSlice";
import axios from "axios";

export const getAllFilms = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/films")
      .then((info) => dispatch(allFilms(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getFilm = (episode_id) => {
    return (dispatch) => {
      axios
        .get(`http://localhost:3001/api/films/${episode_id}`)
        .then((info) => dispatch(showFilm(info.data)))
        .catch((err) => console.log(err));
    };
  };

  export const getCharacterFilms = (episode_id, filmsId) => {
    
    return (dispatch) => {
      axios
        .get(`http://localhost:3001/api/films/${episode_id}`, filmsId)
        // .then(resp=> console.log(resp.data))
        .then((info) => dispatch(showFilm(info.data)))
        .catch((err) => console.log(err));
    };
  };