import React, { FunctionComponent, ReactNode } from 'react'
import css from './Grid.module.scss'
import classnames from 'classnames'

const Grid: FunctionComponent<{
  children: ReactNode
  container?: boolean
  item?: boolean
}> = ({ children, container, item }) => {
  const propsCss = classnames({
    [css.Grid_container]: container,
    [css.Grid_item]: item,
  })
  return <div className={propsCss}>{children}</div>
}

export default Grid
