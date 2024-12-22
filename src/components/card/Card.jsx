import React from 'react'
import styles from "./card.module.css";
const Card = ({children,cardClass}) => {
  return (
    <div className={`${styles.card} ${styles.cardClass}`}>
      {children}
    </div>
  )
}

export default Card
