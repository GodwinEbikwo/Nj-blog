import React from "react";
import styles from "../styles/entry.module.css";
import Date from "./date";
import Link from "next/link";

export const MyButton = React.forwardRef(({ onClick, href, href2 }, ref) => {
  return (
    <>
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.h_card}></div>
      </a>
      <a href={href2} onClick={onClick} ref={ref}>
        <div className={styles.h_card2}></div>
      </a>
    </>
  );
});

export function Hero({ href1, href2 }) {
  return (
    <div className={styles.hero}>
      <MyButton href={href1} href2={href2} />;
    </div>
  );
}

export const RowButton = React.forwardRef(
  ({ onClick, href1, href2, href3, href4 }, ref) => {
    return (
      <>
        <a href={href1} onClick={onClick} ref={ref}>
          <div className={styles.card}></div>
        </a>
        <a href={href2} onClick={onClick} ref={ref}>
          <div className={styles.card2}></div>
        </a>
        <a href={href3} onClick={onClick} ref={ref}>
          <div className={styles.card3}></div>
        </a>
        <a href={href4} onClick={onClick} ref={ref}>
          <div className={styles.card4}></div>
        </a>
      </>
    );
  }
);

export default function Card({ href1, href2, href3, href4 }) {
  return (
    <div className={styles.parent}>
      <RowButton href1={href1} href2={href2} href3={href3} href4={href4} />
    </div>
  );
}

export function PCard({ title, date }) {
  return (
    <div className={styles.parent}>
      <div className={styles.card}></div>
      <div className={styles.card2}>{title}</div>
      <div className={styles.card3}>{title}</div>
      <div className={styles.card4}>{title}</div>
    </div>
  );
}

export function NewCard({ title, date }) {
  return (
    <div className={styles.container}>
      <div className={styles.c_inner}>
        <h2>{title}</h2>
        <h4>
          <Date dateString={date} />
        </h4>
      </div>
    </div>
  );
}
