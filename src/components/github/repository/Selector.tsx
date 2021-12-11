import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Selector.module.scss'

export const RepositorySelector: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      selector
      <FontAwesomeIcon icon={faSortDown} className={styles.knob} />
    </div>
  )
}
