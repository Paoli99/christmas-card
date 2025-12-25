import { Volume2, VolumeX } from "lucide-react"

type Props = {
  enabled: boolean
  onToggle: () => void
}

export function SoundToggle({ enabled, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="
        fixed top-4 right-4 z-50
        flex items-center justify-center
        h-10 w-10 rounded-full
        bg-black/60 text-white
        backdrop-blur
        hover:bg-black/80
        transition
      "
      aria-label="Toggle sound"
    >
      {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  )
}
