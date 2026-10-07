import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <section className="spinner-section">
      <div className={styles.spinner}></div>
    </section>
  );
}

export default Spinner;
