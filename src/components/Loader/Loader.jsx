import styles from './Loader.module.css'
export const Loader = () => {
  return (
      <div className={styles.loaderWrapper}>
          <span className={styles.loader}></span>
      </div>

  )
}