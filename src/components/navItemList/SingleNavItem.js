import React from 'react'
import styles from './NavItem.module.css'

export default function SingleNavItem({title}) {
  return (
    <div
        className={styles.navitem}
        style={{
            cursor:'pointer'
        }}
    >
        {title}
        </div>
  )
}
