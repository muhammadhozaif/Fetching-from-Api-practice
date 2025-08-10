import React from "react";
import styles from "./Card.module.css";
export default function Card(prop) {
  return (
    <div className={styles.box}>
      <p>User id: {prop.userId}</p>
      <p>ID: {prop.id}</p>
      <p>Title:{prop.title}</p>
      <p>Status:{prop.completed ? "yes" : "no"}</p>
    </div>
  );
}
