import React, { FunctionComponent, ReactNode } from 'react'
import css from './Box.module.scss'

const Box: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={css.Box}>{children}</div>
}

export default Box

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
