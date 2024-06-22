import React, { ReactNode } from 'react'

export type Element =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'legend'
  | 'label'
  | 'div'
  | 'code'
  | 'a'

export type Variant =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'P'
  | 'blockquote'
  | 'list'
  | 'code'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted'
  | 'subtle'
  | 'detail'
  | 'link'
  | 'xsmall'

export type Weight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export interface TextProps extends React.HTMLProps<HTMLElement> {
  /** Text to display */
  children: ReactNode
  /** The element type */
  /** @default p */
  as?: Element
  /** Variant to apply to mobile first design */
  /** @default P */
  variant: Variant
  /** Variant to apply to desktop design */
  md?: Variant
  /** Variant to apply to large desktop design */
  lg?: Variant
  /** Weight of the text */
  weight?: Weight
  /** Extra classNames */
  className?: string
}
