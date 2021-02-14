import React, { FunctionComponent, ReactNode } from 'react'
import style from './Box.module.scss'

const Box: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={style.Box}>{children}</div>
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
