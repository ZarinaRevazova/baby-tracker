import { useMemo } from 'react'

const MS_IN_DAY = 1000 * 60 * 60 * 24
const PREGNANCY_DAYS = 280

function formatDate(date) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function toDateOnly(dateString) {
  if (!dateString) {
    return null
  }
  const date = new Date(`${dateString}T00:00:00`)
  return Number.isNaN(date.getTime()) ? null : date
}

export function usePregnancyCalculator(lmpDate) {
  return useMemo(() => {
    const today = new Date()
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
      0,
    )

    const selectedDate = toDateOnly(lmpDate)
    const isValidDate = Boolean(selectedDate && selectedDate <= todayOnly)
    const maxLmpDate = todayOnly.toISOString().split('T')[0]

    if (!isValidDate) {
      return {
        hasValidDate: false,
        currentWeek: 0,
        currentWeekLabel: '—',
        gestationLabel: '—',
        eddLabel: '—',
        maxLmpDate,
      }
    }

    const elapsedDays = Math.max(
      0,
      Math.floor((todayOnly.getTime() - selectedDate.getTime()) / MS_IN_DAY),
    )
    const cappedDays = Math.min(elapsedDays, PREGNANCY_DAYS)
    const weeks = Math.floor(cappedDays / 7)
    const days = cappedDays % 7
    const pregnancyWeek = Math.min(40, Math.max(1, weeks + 1))

    const eddDate = new Date(selectedDate)
    eddDate.setDate(eddDate.getDate() + PREGNANCY_DAYS)

    return {
      hasValidDate: true,
      currentWeek: pregnancyWeek,
      currentWeekLabel: `${pregnancyWeek} неделя`,
      gestationLabel: `${weeks} н. ${days} д.`,
      eddLabel: formatDate(eddDate),
      maxLmpDate,
    }
  }, [lmpDate])
}
