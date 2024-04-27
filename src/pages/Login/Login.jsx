import React, { useState } from "react";
import {
  HowToRegOutlined,
  LoginOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin, setLoginError } from "../../store/features/auth/auth";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

const emailCheck = (email) => {
  const emailTest =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailTest.test(email);
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.auth.loginError);
  const [isSignup, setIsSignup] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    email: isSignup ? "" : "null",
    password: "",
  });
  const [inputErr, setinputErr] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErr, setFormErr] = useState();
  const [formValid, setFormValid] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setFormValid(null);
    e.preventDefault();

    if (inputErr.name || !inputData.name) {
      setFormErr(
        "Имя пользователя должно содержать от 3 до 20 символов. Пожалуйста, введите еще раз"
      );
      return;
    }
    if (inputErr.email || !inputData.email) {
      setFormErr(
        "Адрес электронной почты неверный. Пожалуйста, введите еще раз"
      );
      return;
    }
    if (inputErr.password || !inputData.password) {
      setFormErr(
        "Пароль должен состоять более чем из 5 символов. Пожалуйста, введите еще раз"
      );
      return;
    }
    setFormErr(null);
    // console.log(inputData);
    dispatch(handleLogin(inputData.name, inputData.password, navigate)).then(
      (success) => {
        if (!success) {
          setErrorModal(true);
        } else {
          setFormValid(
            isSignup
              ? "Вы успешно зарегистрировались"
              : "Вы успешно вошли в систему"
          );
        }
      }
    );
  };
  const allInputs = () => {
    return inputData.name !== "" && inputData.email !== "" && inputData.password !== ""
  }

  const resetState = () => {
    setIsSignup(!isSignup);
    setFormValid();
    setInputData((prevState) => ({
      name: "",
      email: isSignup ? "null" : "",
      password: "",
    }));
    setinputErr((prevErr) => ({
      ...prevErr,
      email: false,
    }));
  };

  const handleBlur = (field) => {
    setinputErr((prevErr) => ({
      ...prevErr,
      [field]:
        field === "name"
          ? !inputData.name ||
            inputData.name.length < 3 ||
            inputData.name.length > 20
          : field === "email"
          ? !emailCheck(inputData.email)
          : field === "password" &&
            (!inputData.password || inputData.password.length < 6),
    }));
  };

  const handleInputsErr = () => {
    return {
      name:
        inputErr.name &&
        (!inputData.name ||
          inputData.name.length < 3 ||
          inputData.name.length > 20),
      email: inputErr.email && !emailCheck(inputData.email),
      password:
        inputErr.password &&
        (!inputData.password || inputData.password.length < 6),
    };
  };

  const errors = handleInputsErr();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={450}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <TextField
            name="name"
            value={inputData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            label="Имя"
            error={errors.name}
            // helperText={errors.name && "Введите корректное имя"}
            variant="outlined"
            margin="normal"
            required
            sx={{
              borderRadius: "8px",
              width: "calc(100% - 30px )",
            }}
          />
          {isSignup && (
            <TextField
              name="email"
              value={inputData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              label="Эл. Почта"
              error={errors.email}
              // helperText={errors.email && "Введите корректный адрес эл. почты"}
              margin="normal"
              type="email"
              variant="outlined"
              required
              sx={{
                borderRadius: "8px",
                width: "calc(100% - 30px )",
              }}
            />
          )}
          <FormControl
            sx={{ width: "calc(100% - 30px)" }}
            variant="outlined"
            required
            margin="normal"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={errors.password}
            >
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={inputData.password}
              onChange={handleChange}
              onBlur={() => handleBlur("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Пароль"
              name="password"
              error={errors.password}
            />
          </FormControl>
          <Button
            type="submit"
            disabled={!allInputs()}
            sx={{
              marginTop: 3,
              borderRadius: "8px",
              width: "calc(100% - 60px)",
            }}
            variant="contained"
            color={isSignup ? "warning" : "success"}
            onClick={handleSubmit}
            endIcon={isSignup ? <HowToRegOutlined /> : <LoginOutlined />}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
          <Button
            onClick={resetState}
            endIcon={isSignup ? <LoginOutlined /> : <HowToRegOutlined />}
            sx={{ marginTop: 3 }}
          >
            {isSignup
              ? "Уже есть аккаунт? Войти"
              : "Нет аккаунта? зарегистрируйтесь"}
          </Button>
          {formErr && <Alert severity="error">{formErr}</Alert>}
        </Box>
      </form>
      {loginError ? (
        <ErrorModal
          open={errorModal && !isSignup}
          onClose={() => setErrorModal(false)}
          errorMessage="Неправильное имя пользователя или пароль."
        />
      ) : (
        formValid && <Alert severity="success">{formValid}</Alert>
      )}
    </div>
  );
};

export default Login;
