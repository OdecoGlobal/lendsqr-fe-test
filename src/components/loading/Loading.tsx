import styles from './loading.module.scss';
const Loading = ({ fullScreen = false }: { fullScreen?: boolean }) => {
  return (
    <div
      className={`${styles.loader} ${fullScreen ? `${styles['loader-fullscreen']}` : ''}`}
    >
      <div className={styles.spinner} />
    </div>
  );
};

export default Loading;
