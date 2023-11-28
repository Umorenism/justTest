import axios from "axios";

const URL: string = "http://localhost:2277/api/v1";

export const createProject = async (userID: any, data: any) => {
  try {
    return await axios
      .post(`${URL}/create-project/${userID}`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewProjects = async (userID: any) => {
  try {
    return await axios
      .get(`${URL}/view-user-project/${userID}`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewOneProject = async (projectID: any) => {
  try {
    return await axios
      .get(`${URL}/view-one-project/${projectID}`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
