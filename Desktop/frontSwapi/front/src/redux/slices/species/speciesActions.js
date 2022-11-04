import { allSpecies , showSpecie } from "./speciesSlice";
import axios from "axios";

export const getAllSpecies = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/species")
      .then((info) => dispatch(allSpecies(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getSpecie = (specie_id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/species/${specie_id}`)
      .then((info) => dispatch(showSpecie(info.data)))
      .catch((err) => console.log(err));
  };
};