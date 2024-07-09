import styles from './style.module.css';

const Component = () => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox + ' ' + styles['visually-hidden']}
      />
      <label className={styles.icon} htmlFor="checkbox">
        <div className={styles.hamburger}>
          <span className={`${styles.bar} ${styles['bar-1']}`}></span>
          <span className={`${styles.bar} ${styles['bar-2']}`}></span>
          <span className={`${styles.bar} ${styles['bar-3']}`}></span>
          <span className={`${styles.bar} ${styles['bar-4']}`}></span>
          <span className={`${styles.bar} ${styles['bar-5']}`}></span>
        </div>
      </label>
    </div>
  );
};

export default Component;
