import { useState } from "react"
import { motion } from "framer-motion"
import front from "../assets/front.png"
import coupon from "../assets/cupon.png"

export function ChristmasCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative z-20 flex flex-col items-center justify-center">
      {/* CONTENEDOR FÍSICO */}
      <motion.div
        className="relative cursor-pointer"
        style={{
          perspective: "500px",
          width: "496px",   
          height: "700px",  
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {/* EJE DE ROTACIÓN */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center", 
          }}
        >
          {/* FRONT */}
          {!isOpen && (
            <img
              src={front}
              alt="Front"
              className="absolute inset-0 h-full w-full object-contain drop-shadow-xl"
              style={{ backfaceVisibility: "hidden" }}
            />
          )}

          {/* BACK */}
          {isOpen && (
            <img
              src={coupon}
              alt="Coupon"
              className="absolute inset-0 h-full w-full object-contain drop-shadow-xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* TEXTO */}
      {!isOpen && (
        <motion.p
          className="text-xl font-bold text-white"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ÁBREME
        </motion.p>
      )}
    </div>
  )
}
