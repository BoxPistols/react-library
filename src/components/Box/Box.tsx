import React from 'react'
import css from './Box.module.scss'

export const Box: React.FC<{ children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className={css.Box} {...props}>
      {children}
    </div>
  )
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
