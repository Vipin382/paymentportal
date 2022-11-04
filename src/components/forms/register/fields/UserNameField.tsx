import { UseFormRegister, FieldError } from "react-hook-form";
import inputStyles from "../../../../styles/input.module.scss";
import { RegisterformFields } from "../../../types/form-fields";
import React from "react";

type Props = {
  register: UseFormRegister<RegisterformFields>;
  errors?: FieldError;
};

export const UserNameField: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor={"username"}>{"User Name"}</label>
        </div>
        {errors && (
          <div className={inputStyles.inputError}>{errors?.message}</div>
        )}
      </div>
      <input
        className={inputStyles.inputField}
        id="username"
        {...register("username", {
          required: "Required",
          maxLength: {
            value: 16,
            message: "16 characters Max",
          },
          minLength: {
            value: 3,
            message: "3 characters Min",
          },
        })}
      />
    </div>
  );
};
