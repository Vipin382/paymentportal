import React, { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  label: string;
  id: string;
};
const InputField: FC<Props> = ({ label, id }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerHeader}>
        <div className={styles.inputLabel}>
          <label htmlFor={id}>{label}</label>
        </div>
        <div className={styles.inputError}>Error</div>
      </div>
      <input id={id} className={styles.inputField} />
    </div>
  );
};
export default InputField;
