import { type } from 'os'

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Cols_24 =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

export type Spacing = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

/* @params: Size Name
  'xxxs'
  'xxs'
  'xs'
  'sm'
  'md'
  'lg'
  'xl'
  'xxl'
  'xxxl'
 */

export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
export type alignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch'
