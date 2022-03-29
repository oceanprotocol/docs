import React from 'react'
import styles from './ToggleSwitch.module.scss'

const ToggleSwitch = () => {
  return (
    <div className={styles.switchButton}>
      <input
        className={styles.switchButtonCheckbox}
        type="checkbox"
        onClick={() => {
          if (window) {
            window.open('https://v3.docs.oceanprotocol.com/', '_self')
          }
        }}
      />
      <label className={styles.switchButtonLabel} htmlFor="">
        <span className={styles.switchButtonLabelSpan}>v4</span>
      </label>
    </div>
  )
}

export default ToggleSwitch
