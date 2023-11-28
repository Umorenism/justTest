import axios from "axios";

const URL: string = "http://localhost:2277/api/v1";

export const readUserAccount = async (userID: any) => {
  try {
    return await axios
      .get(`${URL}/view-one-user/${userID}`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
