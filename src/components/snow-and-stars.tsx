"use client"

import { useEffect, useState } from "react"

export function SnowAndStars() {
  const [elements, setElements] = useState<{ stars: any[]; snow: any[] }>({ stars: [], snow: [] })

  useEffect(() => {
    const stars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
    }))

    const snow = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * -20}s`,
    }))

    setElements({ stars, snow })
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star"
          style={
            {
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              "--duration": star.duration,
              animationDelay: star.delay,
            } as any
          }
        />
      ))}
      {elements.snow.map((flake) => (
        <div
          key={`snow-${flake.id}`}
          className="snowflake"
          style={
            {
              left: flake.left,
              width: flake.size,
              height: flake.size,
              "--duration": flake.duration,
              animationDelay: flake.delay,
              top: "-10px",
            } as any
          }
        />
      ))}
    </div>
  )
}
