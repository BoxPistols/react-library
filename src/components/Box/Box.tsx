import React from 'react'
import css from './Box.module.scss'

export const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={css.Box}>{children}</div>
}

/* if Name function */
/*
  export const Box = () => {
    return (
      <div>
        Box
      </div>
    )
  }
*/
