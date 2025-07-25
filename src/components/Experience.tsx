import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{opacity: 1}}
        initial={{opacity: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
        className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience: { year: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; role: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; company: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; technologies: any[]; }, index: Key | null | undefined) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{duration: 1}} 
                viewport={{once: true}}
                className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                </motion.div>

                <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{duration: 1}}
                viewport={{once: true}} 
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{experience.role} - 
                        <span className="text-sm text-purple-100"> {experience.company}</span></h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1
                            text-sm font-medium text-purple-600">{tech}</span>
                        ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
