import { useRef, useState } from "react"

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  const toggle = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
    }

    if (enabled) {
      audioRef.current.pause()
      setEnabled(false)
    } else {
      await audioRef.current.play()
      setEnabled(true)
    }
  }

  return { enabled, toggle }
}
