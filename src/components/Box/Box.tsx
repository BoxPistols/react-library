import React from 'react'
import css from './Box.module.scss'
import classnames from 'classnames'

export const Box: React.FC<
  {
    children: React.ReactNode
    container?: boolean
    item?: boolean
    // 12 Column
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, container, item, ...props }) => {
  classnames({
    [css.Grid_container]: container,
    [css.Grid_item]: item,
  })
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
