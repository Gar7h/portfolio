import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { PROJECTS } from "../constants"
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>{PROJECTS.map((project: { image: string | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; technologies: any[]; }, index: Key | null | undefined) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{duration: 1}}
                viewport={{once: true}} 
                className="w-full lg:w-1/4">
                <img 
                    src={project.image}
                    width={150}
                    height={150}
                    alt='{project.title}'
                    className="mb-6 rounded" 
                />
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration: 1}}
            viewport={{once: true}} 
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech, index) =>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">
                    {tech}
                </span>
            ))}
            </motion.div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Projects
