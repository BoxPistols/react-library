import React from 'react'
import css from './Grid.module.scss'
import classnames from 'classnames'
import { Cols, Cols_24, Spacing, justifyContent, alignItems } from './GridType'

export const Grid: React.FC<
  {
    children: React.ReactNode
    container?: boolean
    item?: boolean
    // 12 Column
    xs?: Cols
    sm?: Cols
    md?: Cols
    lg?: Cols
    xl?: Cols
    // 24 Column
    xs_24?: Cols_24
    sm_24?: Cols_24
    md_24?: Cols_24
    lg_24?: Cols_24
    xl_24?: Cols_24
    // not has BreakPoint
    cols_24?: Cols_24
    spacing?: Spacing
    justifyContent?: justifyContent
    alignItems?: alignItems
  } & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  xs_24,
  sm_24,
  md_24,
  lg_24,
  xl_24,
  cols_24,
  spacing,
  justifyContent,
  alignItems,
  ...props
}) => {
  const propsCss = classnames({
    [css.Grid_container]: container,
    [css.Grid_item]: item,
    // 12 Column
    [css[`Grid_xs_${xs}`]]: xs,
    [css[`Grid_sm_${sm}`]]: sm,
    [css[`Grid_md_${md}`]]: md,
    [css[`Grid_lg_${lg}`]]: lg,
    [css[`Grid_xl_${xl}`]]: xl,
    // 24 Column
    [css[`Grid_xs_24_${xs_24}`]]: xs_24,
    [css[`Grid_sm_24_${sm_24}`]]: sm_24,
    [css[`Grid_md_24_${md_24}`]]: md_24,
    [css[`Grid_lg_24_${lg_24}`]]: lg_24,
    [css[`Grid_xl_24_${xl_24}`]]: xl_24,
    [css[`Grid_cols-24_${cols_24}`]]: cols_24,
    [css[`Grid_spacing_${spacing}`]]: spacing,
    [css[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
    [css[`Grid_alignItems_${alignItems}`]]: alignItems,
  })
  return (
    <div className={propsCss} {...props}>
      {children}
    </div>
  )
}
