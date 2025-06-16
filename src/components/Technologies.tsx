import { RiReactjsLine } from "react-icons/ri"
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconContext } from "react-icons";
import pythonlogo from "../assets/python-logo-only.png"
import javalogo from "../assets/javalogo.png"
import sqllogo from "../assets/MySQL-Logo.wine.png"
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
        <motion.h2
        whileInView={{opacity: 1}}
        initial={{opacity: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
        className="my-20 text-center text-4xl">Skills</motion.h2>
        <motion.div
        whileInView={{opacity: 1}}
        initial={{ opacity: 0,}}
        transition={{ duration: 2.5}}
        viewport={{once: true}} 
        className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-600 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-600 p-4">
            <FaLaravel className="text-7xl text-red-500"/>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-600 p-4">
            <img src={pythonlogo} alt="python" style={{ width: '72px', height: '72px'}} />
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          variants={iconVariants(4)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-600 p-4">
            <SiPhp style={{color: "darkslateblue"}} className="text-7xl"/>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          variants={iconVariants(6)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-600 p-4">
              <img src={javalogo} alt="java" style={{ width: '72px', height: '72px'}} />           
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4">
            <img src={sqllogo} alt="sql" style={{ width: '72px', height: '72px'}} /> 
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
