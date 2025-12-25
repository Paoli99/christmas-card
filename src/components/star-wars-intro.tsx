import { useEffect, useState } from "react"

export function StarWarsIntro({
  onFinish,
}: {
  onFinish: () => void
}) {
  useEffect(() => {
    const handler = () => onFinish()
    const el = document.getElementById("star-wars-crawl")
    el?.addEventListener("animationend", handler)
    return () => el?.removeEventListener("animationend", handler)
  }, [onFinish])

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <div className="star-wars-container absolute bottom-0 left-1/2 w-[95vw] max-w-3xl -translate-x-1/2">
        <div
          id="star-wars-crawl"
          className="star-wars-crawl text-[#feda4a] text-center"
          style={{
            fontFamily: "'Pathway Gothic One', sans-serif",
            animation: "star-wars-crawl 10s linear forwards",
          }}
        >
          <p className="mb-6 text-2xl sm:text-3xl tracking-[0.35em]">
            FELIZ NAVIDAD
          </p>

          <p className="mb-10 text-4xl sm:text-5xl tracking-[0.3em]">
            MI CAMBS
          </p>

          <p className="text-xl sm:text-2xl">
            HACE MUCHO TIEMPO,
            <br />
            EN UNA GALAXIA NO TAN LEJANA,
            <br />
            DOS CAMINOS SE CRUZARON.
          </p>

          <p className="mt-8 text-xl sm:text-2xl">
            DESDE ENTONCES,
            <br />
            CADA DIA TIENE
            <br />
            UNA HISTORIA NUEVA.
          </p>

          <p className="mt-10 text-xl sm:text-2xl">
            QUE ESTA NAVIDAD
            <br />
            SEA SOLO EL COMIENZO
            <br />
            DE MUCHAS MAS.
          </p>
        </div>
      </div>
    </div>
  )
}
