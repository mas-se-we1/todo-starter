export type Importance = 1 | 2 | 3

export const parseImportance = (value: number): Importance => {
  if (value === 3) return 3
  if (value === 2) return 2
  return 1
}
