import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({logoutHandler}) => {
  return (
    <div className={styles.container}>
        <div className={styles.appName}>
            Chatori
        </div>
        <div 
        onClick={logoutHandler}
        className={styles.logoutBtn}>
            Logout
        </div>
    </div>
  )
}

export default Navbar