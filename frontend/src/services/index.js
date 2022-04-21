import axios from "axios";
import { variables } from "./variables";

export const getGamesAll = async () => {

  
  try {
    const result = await axios({
      method: "GET",
      url: process.env.REACT_APP_REST_API+ "api/games",
    });
    return {
      response: result,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error: error,
    };
  }
};
