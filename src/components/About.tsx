import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"
const About = () => {
  return (
    <motion.div
        whileInView={{opacity: 0.75}}
        initial={{opacity: 0}}
        transition={{duration: 1.25}}
        viewport={{once: true}}
        className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About Me</h2>
      <div className="flex flex-wrap">
       
        <div
        className="w-full">
                <div className="flex justify-center">
                    <p className="my-2 max-w-xl py-6 text-center">{ABOUT_TEXT}</p>
                </div>
            </div>
      </div>
    </motion.div>
  )
}

export default About
