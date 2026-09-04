import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

export default function Toast({ message, show }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => setVisible(false), 2000)
      return () => clearTimeout(t)
    }
  }, [show, message])

  return (
    <div className={`toast ${visible ? 'show' : ''}`}>
      <Check size={16} />
      <span>{message}</span>
    </div>
  )
}
