import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>

      <h1>Пожалуйста, подождите...</h1>
    </div>
  );
};
