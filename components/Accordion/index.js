import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ term, code, title, credits, description }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      Term: {term}
      <div onClick={() => setIsActive(!isActive)}>
        {code}
        {title}
        {credits}
        <div>{isActive ? "↑" : "↓"}</div>
      </div>
      {isActive && <div>{description}</div>}
    </div>
  );
}
