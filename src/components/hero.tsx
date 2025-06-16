import { motion } from "motion/react"

const appear = (delay: number) => ({
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 justify-center min-h-screen">
      <div className="flex justify-center">
        <div className="w-full">
            <div className="flex flex-col items-center text-center">
                <motion.h1 
                variants={appear(0.5)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 
                lg:text-8xl">Gregorius Garth</motion.h1>
                <motion.span
                variants={appear(1.25)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Application Developer</motion.span>
               
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Hero
