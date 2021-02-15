import React from 'react'
import css from './Grid.module.scss'
import classnames from 'classnames'
import { Cols, Cols_24, Spacing } from './GridType'

export const Grid: React.FC<{
  children: React.ReactNode
  container?: boolean
  item?: boolean
  xs?: Cols
  sm?: Cols
  md?: Cols
  lg?: Cols
  xl?: Cols
  cols_24?: Cols_24
  spacing?: Spacing
}> = ({ children, container, item, xs, sm, md, lg, xl, cols_24, spacing }) => {
  const propsCss = classnames({
    [css.Grid_container]: container,
    [css.Grid_item]: item,
    [css[`Grid_xs_${xs}`]]: xs,
    [css[`Grid_sm_${sm}`]]: sm,
    [css[`Grid_md_${md}`]]: md,
    [css[`Grid_lg_${lg}`]]: lg,
    [css[`Grid_lg_${xl}`]]: xl,
    [css[`Grid_cols-24_${cols_24}`]]: cols_24,
    [css[`Grid_spacing_${spacing}`]]: spacing,
  })
  return <div className={propsCss}>{children}</div>
}
