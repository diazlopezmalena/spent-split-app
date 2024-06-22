import { Variant } from './Text.types'

export const textVariants: Record<Variant, string> = {
  // Shadcn Text Variants
  H1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  H2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  H3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  H4: 'scroll-m-20 text-xl font-semibold tracking-tight leading-[110%]',
  P: 'text-base leading-[110%]',
  blockquote: 'text-base mt-6 border-l-2 pl-6 italic',
  list: 'text-base my-6 ml-6 list-disc [&>li]:mt-2', // For UL or OL
  code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
  subtle: 'text-sm leading-[110%] tracking-[-2%]',
  detail: 'text-xs leading-[110%] tracking-[-2%]',
  link: 'text-base underline tracking-[-0.32px] leading-[110%]',
  xsmall: 'text-[10px] leading-[110%] tracking-[-2%]'
}
