import { useForm } from "react-hook-form";
import { Button } from "../../button/Button";
import styles from "./index.module.scss";
import { RegisterformFields } from "../../types/form-fields/index";
import inputStyles from "../../../styles/input.module.scss";

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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameContainer}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor={"firstname"}>{"First Name"}</label>
            </div>
            <div className={inputStyles.inputError}>Error</div>
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
            })}
          />
        </div>

        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor={"lastName"}>{"Last Name"}</label>
            </div>
            <div className={inputStyles.inputError}>Error</div>
          </div>
          <input
            className={inputStyles.inputField}
            id="lastName"
            {...register("lastname", {
              required: "Required",
              maxLength: {
                value: 32,
                message: "32 characters Max",
              },
            })}
          />
        </div>
      </div>
      <div className={inputStyles.inputContainer}>
        <div className={inputStyles.inputContainerHeader}>
          <div className={inputStyles.inputLabel}>
            <label htmlFor={"username"}>{"User Name"}</label>
          </div>
          <div className={inputStyles.inputError}>Error</div>
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
          })}
        />
      </div>
      <div className={inputStyles.inputContainer}>
        <div className={inputStyles.inputContainerHeader}>
          <div className={inputStyles.inputLabel}>
            <label htmlFor={"passwird"}>{"Paasword"}</label>
          </div>
          <div className={inputStyles.inputError}>Error</div>
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
          })}
        />
      </div>
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};
