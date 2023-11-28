import axios from "axios";

const URL: string = "http://localhost:2277/api/v1";

export const createTask = async (projectID: any, data: any) => {
  try {
    return await axios
      .post(`${URL}/create-task/${projectID}`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
