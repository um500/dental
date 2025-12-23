export function timeAgo(dateString: string): string {
  const now = new Date()
  const past = new Date(dateString)

  const diffMs = now.getTime() - past.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)

  if (diffSeconds < 10) return "just now"
  if (diffSeconds < 60) return `${diffSeconds} seconds ago`
  if (diffMinutes < 60) return `${diffMinutes} minutes ago`
  if (diffHours < 24) return `${diffHours} hours ago`

  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${diffWeeks} weeks ago`
  if (diffDays < 365) return `${diffMonths} months ago`

  return diffYears === 1 ? "a year ago" : `${diffYears} years ago`
}
