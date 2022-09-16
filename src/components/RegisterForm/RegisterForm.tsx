import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Box, Alert, AlertIcon, CircularProgress } from "@chakra-ui/react";
import { registerSchema } from "../../schemas/registerSchema";
import {
  RegisterBox,
  RegisterFormBox,
  RegisterTextBox,
  RegisterTitle,
  RegisterForm,
  RegisterFormControl,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
  RegisterRoutetext,
  RegisterFieldError,
} from "./RegisterForm.styled";
import { registerUser } from "../../api/user";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  console.log(errors);
  return (
    <RegisterBox>
      <RegisterFormBox>
        {Object.keys(errors).length > 0 && (
          <Box>
            {Object.values(errors).map((err) => (
              <Alert status="error" key={err} mb="2">
                <AlertIcon />
                {err}
              </Alert>
            ))}
          </Box>
        )}
        <RegisterTextBox>
          <RegisterTitle>Create An Account</RegisterTitle>
        </RegisterTextBox>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={async (userData) => {
            console.log(userData);
            try {
              const response = await registerUser(userData);
              console.log(response);
              if (response.data.isRegistered) {
                localStorage.removeItem("user");
                localStorage.removeItem("session");
                navigate("/");
              } else {
                setErrors(response.data);
              }
            } catch (error: any) {
              console.error(error);
            }
          }}
        >
          {(props) => (
            <RegisterForm onSubmit={props.handleSubmit}>
              <RegisterFormControl>
                <RegisterLabel htmlFor="username">Username</RegisterLabel>
                <RegisterInput
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Please enter username"
                  value={props.values.username}
                  onChange={props.handleChange}
                />
                {props.errors.username && props.touched.username ? (
                  <RegisterFieldError>
                    {props.errors.username}
                  </RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterFormControl>
                <RegisterLabel htmlFor="email">Email</RegisterLabel>
                <RegisterInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={props.values.email}
                  onChange={props.handleChange}
                />
                {props.errors.email && props.touched.email ? (
                  <RegisterFieldError>{props.errors.email}</RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterFormControl>
                <RegisterLabel htmlFor="password">Password</RegisterLabel>
                <RegisterInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  value={props.values.password}
                  onChange={props.handleChange}
                />
                {props.errors.password && props.touched.password ? (
                  <RegisterFieldError>
                    {props.errors.password}
                  </RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterFormControl>
                <RegisterLabel htmlFor="c-password">
                  Confirm Password
                </RegisterLabel>
                <RegisterInput
                  type="password"
                  id="c-password"
                  name="confirmPassword"
                  placeholder="Please confirm password"
                  value={props.values.confirmPassword}
                  onChange={props.handleChange}
                />
                {props.errors.confirmPassword &&
                props.touched.confirmPassword ? (
                  <RegisterFieldError>
                    {props.errors.confirmPassword}
                  </RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterButton
                type="submit"
                style={
                  props.isSubmitting && errors.length < 1
                    ? { opacity: ".4", cursor: "not-allowed" }
                    : { opacity: "1", cursor: "pointer" }
                }
              >
                {props.isSubmitting && errors.length < 1 ? (
                  <CircularProgress isIndeterminate value={80} size="30px" />
                ) : (
                  "Register"
                )}
              </RegisterButton>
            </RegisterForm>
          )}
        </Formik>
        <RegisterRoutetext>
          Already Have an account?{" "}
          <Link to="/" style={{ color: "#5a8dee", textDecoration: "none" }}>
            Sign In
          </Link>
        </RegisterRoutetext>
      </RegisterFormBox>
    </RegisterBox>
  );
};

export default Register;
