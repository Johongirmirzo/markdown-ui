import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormRoutetext,
  FormFieldError,
} from "../../styles/FormStyles.styled";

interface RegisterInputProps {
  isDarkMode: boolean;
}

const RegisterBox = styled.div`
  background: hsl(0, 0%, 17%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegisterFormBox = styled.section`
  min-width: 250px;
  max-width: 450px;
  width: 90%;
  margin: 20px 0;
  background: #222;
  border-radius: 5px;
  padding: 25px 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const RegisterTextBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;
const RegisterTitle = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: clamp(1.5rem, calc(2vw + 1rem), 2rem);
`;
const RegisterDescription = styled.p`
  color: hsl(0, 0%, 73%);
  font-weight: 600;
  padding-top: 5px;
  font-size: 1.1rem;
`;
const RegisterForm = styled(Form)``;
const RegisterFormControl = styled(FormControl)``;
const RegisterLabel = styled(FormLabel)`
  color: hsl(0, 0%, 73%);
`;
const RegisterInput = styled(FormInput)<RegisterInputProps>`
  color: #e0e0e0;
  &::placeholder {
    color: #8c8c8c;
  }
`;
const RegisterButton = styled(FormButton)``;
const RegisterRoutetext = styled(FormRoutetext)`
  color: #e0e0e0;
`;
const RegisterFieldError = styled(FormFieldError)``;

const RegisterHrBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  & > *:not(:nth-child(2)) {
    flex: 1;
  }
`;

export {
  RegisterBox,
  RegisterFormBox,
  RegisterTextBox,
  RegisterTitle,
  RegisterDescription,
  RegisterForm,
  RegisterFormControl,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
  RegisterRoutetext,
  RegisterFieldError,
  RegisterHrBox,
};
