import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

interface RegisterInterface {
  userId: string;
  username: string;
}

const Register = ({ user }: { user: RegisterInterface }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
