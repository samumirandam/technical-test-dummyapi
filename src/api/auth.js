export const login = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const response = { email: payload.email, token: '123' };
    dispatch(steps.success(response));
  } catch (error) {
    dispatch(steps.error(error.message));
  }
};

export const logout = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const response = payload.email;
    dispatch(steps.success(response));
  } catch (error) {
    dispatch(steps.error(error.message));
  }
};
