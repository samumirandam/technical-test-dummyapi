const adminList = ['admin', 'samu'];

export const login = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const isAdmin = adminList.some((user) => user === payload.email);
    const response = { email: payload.email, token: '123', isAdmin };
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
