export const applySelectedBreakpointPrefix = (breakpoint: 'md' | 'lg', classes: string) => {
  try {
    if (classes === '') return ''
    return classes
      .split(' ')
      .map((c) => {
        if (c.startsWith('md:') || c.startsWith('lg:')) return c
        return `${breakpoint}:${c}`
      })
      .join(' ')
  } catch (e) {
    return ''
  }
}
