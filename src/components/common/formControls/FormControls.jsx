import styles from "./FormControls.module.scss";

const FormControlsHoc =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={styles.formControls}>
        <Element
          {...input}
          {...props}
          className={hasError ? styles.error : null}
        />
        {hasError && <p>{meta.error}</p>}
      </div>
    );
  };

export default FormControlsHoc;
