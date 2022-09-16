import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/loginSchema";
import {
  Box,
  Alert,
  AlertIcon,
  Checkbox,
  CircularProgress,
} from "@chakra-ui/react";
import { Formik } from "formik";
import {
  LoginBox,
  LoginFormBox,
  LoginTextBox,
  LoginTitle,
  LoginDescription,
  LoginForm,
  LoginFormControl,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginRoutetext,
  LoginFieldError,
} from "./LoginForm.styled";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../api/user";

const alerWarningStyles = {
  margin: "10px 0",
  border: "2px solid hsl(0, 63%, 48%)",
  background: "hsl(0, 63%, 38%)",
  borderRadius: "5px",
};

const Login = () => {
  const { storeUser } = useContext(AuthContext);

  const session = localStorage.getItem("session");
  const loginRememberUserData = JSON.parse(
    localStorage.getItem("login-remember-user") || "{}"
  );
  const navigate = useNavigate();
  const [error, setError] = useState("");

  return (
    <LoginBox>
      <LoginFormBox>
        {error && (
          <Box>
            <Alert status="error" mb="2" sx={alerWarningStyles}>
              <AlertIcon />
              {error}
            </Alert>
          </Box>
        )}
        <LoginTextBox>
          <LoginTitle>Login To Your Account</LoginTitle>
        </LoginTextBox>
        {session && (
          <Alert status="error" sx={alerWarningStyles}>
            <AlertIcon />
            {session}
          </Alert>
        )}
        <Formik
          initialValues={{
            email: loginRememberUserData.email || "",
            password: loginRememberUserData.password || "",
            rememberMe: false,
          }}
          validationSchema={loginSchema}
          onSubmit={async (loginData) => {
            console.log(loginData);
            try {
              const response = await loginUser(loginData);
              console.log("Login Response", response);
              if (loginData.rememberMe) {
                localStorage.setItem(
                  "login-remember-user",
                  JSON.stringify(loginData)
                );
              } else {
                localStorage.removeItem("login-remember-user");
              }

              storeUser(response.data);
              setError("");
              navigate("/");
            } catch (error) {
              setError("Wrong Credentials");
            }
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange,
            values,
          }) => (
            <LoginForm onSubmit={handleSubmit}>
              <LoginFormControl>
                <LoginLabel htmlFor="email">Email</LoginLabel>
                <LoginInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <LoginFieldError>{errors.email}</LoginFieldError>
                ) : null}
              </LoginFormControl>

              <LoginFormControl>
                <LoginLabel htmlFor="password">Password</LoginLabel>
                <LoginInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <LoginFieldError>{errors.password}</LoginFieldError>
                ) : null}
              </LoginFormControl>
              <LoginFormControl>
                <Checkbox
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                >
                  Remember Me
                </Checkbox>
              </LoginFormControl>
              <LoginButton
                style={
                  isSubmitting && !error
                    ? { opacity: ".4", cursor: "not-allowed" }
                    : { opacity: "1", cursor: "pointer" }
                }
                type="submit"
              >
                {isSubmitting && !error ? (
                  <CircularProgress isIndeterminate value={80} size="30px" />
                ) : (
                  "Login"
                )}
              </LoginButton>
            </LoginForm>
          )}
        </Formik>
        <LoginRoutetext>
          Don't have an acoount yet?
          <Link
            to="/register"
            style={{ color: "#5a8dee", textDecoration: "none" }}
          >
            {" "}
            Register
          </Link>
        </LoginRoutetext>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;
