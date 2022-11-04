import { NextPage } from "next";
import { RegisterForm } from "../../components/forms/register/RegisterForm";
import Style from "./index.module.scss";

const RegisterPage: NextPage = () => {
  return (
    <div className={Style.page}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
