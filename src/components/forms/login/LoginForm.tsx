import formStyle from "../../../styles/forms.module.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../button/Button";
import { LoginFormFields } from "../../types/form-fields/index";
import defaultButton from "../../../styles/button.module.scss";
import { LoginUserNameField } from "./fields/UserNameField";
import { LoginPasswordField } from "./fields/PasswordField";

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormFields>();

  const onSubmit = (data: LoginFormFields) => {
    console.log(data);
  };

  return (
    <form className={formStyle.form} onSubmit={handleSubmit(onSubmit)}>
      <LoginUserNameField register={register} errors={errors.username} />
      <LoginPasswordField register={register} errors={errors.password} />
      <Button className={defaultButton.button}>Login</Button>
    </form>
  );
};
