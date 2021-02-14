import React, { FunctionComponent, ReactNode } from 'react'
import css from './Grid.module.scss'
import classnames from 'classnames'
import { Cols, Cols_24 } from './GridType'

const Grid: FunctionComponent<{
  children: ReactNode
  container?: boolean
  item?: boolean
  cols?: Cols
  cols_24?: Cols_24
}> = ({ children, container, item, cols, cols_24 }) => {
  const propsCss = classnames({
    [css.Grid_container]: container,
    [css.Grid_item]: item,
    [css[`Grid_cols_${cols}`]]: cols,
    [css[`Grid_cols-24_${cols_24}`]]: cols_24,
  })
  return <div className={propsCss}>{children}</div>
}

export default Grid
