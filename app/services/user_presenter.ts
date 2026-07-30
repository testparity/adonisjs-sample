export function displayName(user: { firstName: string; lastName: string }): string {
  return `${user.firstName} ${user.lastName}`
}

export function initials(user: { firstName: string; lastName: string }): string {
  return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
}

export function normalizeName(name: string): string {
  const trimmed = name.trim()
  const collapsed = trimmed.replace(/\s+/g, ' ')
  return collapsed
}

export function wordCount(name: string): number {
  const normalized = normalizeName(name)
  const words = normalized.split(' ')
  return words.length
}

export function reverseName(name: string): string {
  const characters = Array.from(name)
  const reversed = characters.reverse()
  const joined = reversed.join('')
  const normalized = joined.normalize('NFC')
  return normalized
}
