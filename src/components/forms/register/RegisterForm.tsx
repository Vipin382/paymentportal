import { useForm } from "react-hook-form";
import { Button } from "../../button/Button";
import { RegisterformFields } from "../../types/form-fields/index";
import { FirstNamedField } from "./fields/FirstNamedField";
import { LastNameField } from "./fields/LastNameField";
import { PasswordField } from "./fields/PasswordField";
import { UserNameField } from "./fields/UserNameField";
import defaultButton from "../../../styles/button.module.scss";
import formStyle from "../../../styles/forms.module.scss";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterformFields>();

  const onSubmit = (data: RegisterformFields) => {
    console.log(data);
  };

  return (
    <form className={formStyle.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={formStyle.formNameContainer}>
        <FirstNamedField register={register} errors={errors.firstname} />
        <LastNameField register={register} errors={errors.lastname} />
      </div>
      <UserNameField register={register} errors={errors.username} />
      <PasswordField register={register} errors={errors.password} />
      <Button className={defaultButton.button}>Create Account</Button>
    </form>
  );
};
