import { addFav , removeFav } from "./speciesSlice";
import axios from "axios";

export const addFavs = (id,userId) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/favs/${id}`, userId)
      .then((info) => dispatch(addFav(info.data)))
      .catch((err) => console.log(err));
  };
};

export const removeFavs = (id, userId) => {
    return (dispatch) => {
        axios
          .delete(`http://localhost:3001/api/favs/${id}`, userId)
          .then((info) => dispatch(removeFav(info.data)))
          .catch((err) => console.log(err));
      };
    };