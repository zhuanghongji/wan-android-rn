

export function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const monthFormatted = month < 10 ? `0${month}` : month
  const dayFormatted = day < 10 ? `0${day}` : day
  return `${year}-${monthFormatted}-${dayFormatted}`
}

export function formatDateStr(dateStr: string) {
  if (dateStr.length !== 8) {
    return dateStr
  }
  const year = dateStr.substring(0, 4)
  const month = dateStr.substring(4, 6)
  const day = dateStr.substring(6, 8)
  return `${year}-${month}-${day}`
}

export function toDate(dateStr?: string): Date {
  const date = new Date()
  if (!dateStr) {
    return date
  }

  let year: string
  let month: string
  let day: string
  if (dateStr.length === 8) {
    year = dateStr.substring(0, 4)
    month = dateStr.substring(4, 6)
    day = dateStr.substring(6, 8)
  } else if (dateStr.length === 10) {
    year = dateStr.substring(0, 4)
    month = dateStr.substring(4, 6)
    day = dateStr.substring(6, 8)
  } else {
    return date
  }
  date.setFullYear(Number(year), Number(month), Number(day))
  return date
}
