import styles from "./postCard.module.css";
import Date from "./date";

function PostCard({ heading, date }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header__section}>
          <h2>{heading}</h2>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}

export default PostCard;
