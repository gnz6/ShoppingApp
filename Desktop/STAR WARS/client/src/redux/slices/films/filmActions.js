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

export const getFilm = (id) => {
    return (dispatch) => {
      axios
        .get(`http://localhost:3001/api/films/${id}`)
        .then((info) => dispatch(showFilm(info.data)))
        .then((info) => console.log(info))
        .catch((err) => console.log(err));
    };
  };

  // export const getCharacterFilms = (episode_id, filmsId) => {
    
  //   return (dispatch) => {
  //     axios
  //       .get(`http://localhost:3001/api/films/${episode_id}`, filmsId)
  //       .then(resp=> console.log(resp))
  //       .then((info) => dispatch(showFilm(info.data)))
  //       .catch((err) => console.log(err));
  //   };
  // };