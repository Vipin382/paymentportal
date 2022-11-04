import { UseFormRegister, FieldError } from "react-hook-form";
import inputStyles from "../../../../styles/input.module.scss";
import { RegisterformFields } from "../../../types/form-fields";
import React from "react";

type Props = {
  register: UseFormRegister<RegisterformFields>;
  errors?: FieldError;
};
export const FirstNamedField: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor={"firstname"}>{"First Name"}</label>
        </div>
        {errors && (
          <div className={inputStyles.inputError}>{errors?.message}</div>
        )}
      </div>
      <input
        id={"firstname"}
        className={inputStyles.inputField}
        {...register("firstname", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 characters Max",
          },
          minLength: {
            value: 2,
            message: "2 characters Min",
          },
        })}
      />
    </div>
  );
};
