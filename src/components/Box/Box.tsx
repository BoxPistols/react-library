import React, { FunctionComponent } from 'react'
import css from './Box.module.scss'

type childrenType = {
  children: React.ReactNode
}
// import styles from 'Box.module.scss'

const Box: FunctionComponent<childrenType> = ({children}) => {
  return <div className={css.Box}>{children}</div>
}

export default Box
