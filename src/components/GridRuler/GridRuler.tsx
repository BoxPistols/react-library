import React from 'react'
import css from './GridRuler.module.scss'
import classnames from 'classnames'
import { Spacing } from 'components/Grid/GridType'

export const GridRuler: React.FC<{ spacing: Spacing }> = ({ spacing }) => {
  const propsCss = classnames(css.GridRuler, {
    [css[`GridRuler_spacing_${spacing}`]]: spacing,
  })
  return (
    <div className={propsCss}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div className={css.GridRuler_item} key={number} />
      ))}
    </div>
  )
}
