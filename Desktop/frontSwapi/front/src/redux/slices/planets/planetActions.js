import {  allPlanets, showPlanet } from "./planetSlice";
import axios from "axios";

export const getAllPlanets = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/planets")
      .then((info) => dispatch(allPlanets(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getPlanet = (planet_id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/planets/${planet_id}`)
      .then((info) => dispatch(showPlanet(info.data)))
      .catch((err) => console.log(err));
  };
};