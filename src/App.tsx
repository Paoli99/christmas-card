import { useState } from "react"
import { SnowAndStars } from "./components/snow-and-stars"
import { ChristmasCard } from "./components/christmas-card"
import { StarWarsIntro } from "./components/star-wars-intro"
import { SoundToggle } from "./components/sound-toggle"
import { useAudio } from "./hooks/useAudio"
import music from "./assets/Wham! - Last Christmas (Instrumental - Official Audio).mp3"

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const audio = useAudio(music)
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
       <SoundToggle enabled={audio.enabled} onToggle={audio.toggle} />
      <SnowAndStars />

      {!introDone && (
        <StarWarsIntro onFinish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <div className="flex min-h-screen items-center justify-center">
          <ChristmasCard />
        </div>
      )}
    </main>
  )
}
