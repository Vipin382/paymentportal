import { Button } from "../../button/Button";
import InputField from "../../inputs/InputField";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.nameContainer}>
        <InputField id="firtName" label="First Name" />
        <InputField id="lastName" label="Last Name" />
      </div>
      <InputField id="username" label="Username" />
      <InputField id="password" label="Password" />
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};
