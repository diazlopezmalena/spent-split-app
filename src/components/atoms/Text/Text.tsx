import { ReactNode } from 'react'
import { textVariants } from './Text.styles'
import { TextProps } from './Text.types'
import { applySelectedBreakpointPrefix } from './Text.utils'

const Text = ({
  children,
  as: AsComponent = 'p',
  variant = 'P',
  md,
  lg,
  weight,
  className
}: TextProps): ReactNode => {
  const classes = `
    ${textVariants[variant]} 
    ${md ? applySelectedBreakpointPrefix('md', textVariants[md]) : ''}
    ${lg ? applySelectedBreakpointPrefix('lg', textVariants[lg]) : ''}
    ${weight ? `font-${weight}` : ''}
    ${className || ''}
  `

  return (
    <AsComponent className={classes} data-testid="text-component">
      {children}
    </AsComponent>
  )
}

export default Text
