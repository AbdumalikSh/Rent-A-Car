import { createSlice } from "@reduxjs/toolkit";
import { setToken, clearToken, getToken } from "../../../utils/token";

const initialState = {
  isAuth: Boolean(getToken()),
  loginError: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    setLoginError: (state, { payload }) => {   
      state.loginError = payload;
    },
  },
});

export const handleLogin = (login, password, navigate) => async (dispatch) => {
  try {
    if (login === "Abdumalik" && password === "120804") {
      const token = "Abdumalik&120804";
      setToken(token);
      dispatch(setIsAuth(true));
      navigate("/");
    } else {
      dispatch(setLoginError(true));
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const handleLogout = () => async (dispatch) => {
  clearToken();
  dispatch(setIsAuth(false));
};

export const { setIsAuth, setLoginError } = authSlice.actions;
export default authSlice.reducer;
