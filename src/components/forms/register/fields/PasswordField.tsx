import { UseFormRegister, FieldError } from "react-hook-form";
import inputStyles from "../../../../styles/input.module.scss";
import { RegisterformFields } from "../../../types/form-fields";
import React from "react";

type Props = {
  register: UseFormRegister<RegisterformFields>;
  errors?: FieldError;
};

export const PasswordField: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor={"passwird"}>{"Paasword"}</label>
        </div>
        {errors && (
          <div className={inputStyles.inputError}>{errors?.message}</div>
        )}
      </div>
      <input
        className={inputStyles.inputField}
        id="password"
        {...register("password", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 characters Max",
          },
          minLength: {
            value: 8,
            message: "8 characters Min",
          },
        })}
      />
    </div>
  );
};
