import axiosInstance from "./config";

export const getPost = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const response = await axiosInstance.get("/post?limit=12");
    dispatch(steps.success(response));
  } catch (error) {
    dispatch(steps.error(error.message));
  }
};
