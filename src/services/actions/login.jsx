import { login } from "../../utils/api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function loginAction(name, password) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    login(name, password)
      .then((res) => {
        if (res.status) {
          dispatch({
            type: LOGIN_SUCCESS,
            login: res.message,
          });
          localStorage.setItem("admin", res.message.token);
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        console.log(err);
      });
  };
}
