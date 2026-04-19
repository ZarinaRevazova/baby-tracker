import { useEffect, useMemo, useState } from 'react'

function MotivationToast({ week, phrases, active }) {
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(false)

  const phrasePool = useMemo(() => phrases ?? [], [phrases])

  useEffect(() => {
    if (!active || phrasePool.length === 0) {
      setVisible(false)
      return
    }

    const phrase = phrasePool[Math.floor(Math.random() * phrasePool.length)]
    setText(phrase)
    setVisible(true)

    const hideTimeout = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearTimeout(hideTimeout)
  }, [active, week, phrasePool])

  if (!text) {
    return null
  }

  return (
    <div className={`toast ${visible ? 'toast-visible' : ''}`} aria-live="polite">
      {text}
    </div>
  )
}

export default MotivationToast
