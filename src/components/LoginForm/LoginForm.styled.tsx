import styled, { css } from "styled-components";

import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormRoutetext,
  FormFieldError,
} from "../../styles/FormStyles.styled";

interface LoginInputProps {
  isDarkMode: boolean;
}

const LoginBox = styled.div`
  background: hsl(0, 0%, 17%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginFormBox = styled.section`
  min-width: 250px;
  max-width: 450px;
  width: 90%;
  background: #222;
  color: #fff;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const LoginTextBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;
const LoginTitle = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 1.9rem;
  font-size: clamp(1.5rem, calc(2vw + 1rem), 2rem);
`;
const LoginDescription = styled.p`
  color: hsl(0, 0%, 73%);
  padding-top: 5px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const LoginForm = styled(Form)``;
const LoginFormControl = styled(FormControl)``;
const LoginLabel = styled(FormLabel)`
  color: hsl(0, 0%, 73%);
`;
const LoginInput = styled(FormInput)<LoginInputProps>`
  color: #e0e0e0;
  &::placeholder {
    color: #8c8c8c;
  }
`;
const LoginButton = styled(FormButton)``;
const LoginRoutetext = styled(FormRoutetext)`
  color: #e0e0e0;
`;
const LoginFieldError = styled(FormFieldError)``;

export {
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
};
