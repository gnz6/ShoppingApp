import { responseFav, responseDeleteFav } from "./favSlice";
import axios from "axios";

export const addFavs = (id, user_id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/favs/${id}`, { user_id: user_id })
      .then((info) => dispatch(responseFav(info.data)))
      .catch((err) => console.log(err));
  };
};

export const removeFavs = (id, user_id) => {
   console.log("user_id", user_id);
   console.log("character", id);
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/api/favs/${id}`,{data: { user_id: user_id }})
      .then((info) => dispatch(responseFav(info.data)))
      // .then((info) =>console.log(info))
      .catch((err) => console.log(err));
  };
};