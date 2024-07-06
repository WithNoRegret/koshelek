export const convert = (value: number, from: string, to: string): number => {
  if (from === to) return value
  if (from === 'EUR' && to === 'USD') return value * 1.07
  if (from === 'USD' && to === 'EUR') return value / 1.07
  return value
}