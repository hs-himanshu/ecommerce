import React from 'react'
import styles from "./loader.module.css"
import ReactDOM from "react-dom";
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}> 
      <div className={styles.loader}>

      </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader;
