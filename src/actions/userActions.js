export const login = (name) =>  (dispatch) => {
  try {
    dispatch({
      type: "USER-LOGIN",
      payload: name,
    })
    localStorage.setItem("userInfo", JSON.stringify(name))
  } catch (error) {
    dispatch({
      type: "USER-LOGIN-ERROR",
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    })
  }
}
