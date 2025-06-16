import { CONTACT } from "../constants"
import { motion } from "motion/react";
import { MdContentCopy } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';


const copyToClipboard = (
  e: React.MouseEvent<HTMLButtonElement>,
  value: string,
  label: string
) => {
  e.preventDefault();
  navigator.clipboard.writeText(value)
    .then(() => toast.success(`${label} copied!`))
    
    .catch(err => {
      console.error(err);
      toast.error(`Failed to copy ${label}`);
    });
};

const Contact = () => {
  return (
    <div className="borber-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{ opacity: 1}}
        initial={{ opacity: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
        className="my-10 text-center text-4xl">Contact Me</motion.h2>
        <div     
        className="text-center tracking-tighter">
            <motion.p 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="my-4 text-gray hover:text-gray-400">
             <button className="inline-flex items-center gap-1" 
              onClick={(e) => copyToClipboard(e, CONTACT.phoneNo, "Phone Number")}
              >{CONTACT.phoneNo} <MdContentCopy /></button><Toaster /> 
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: 100}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="my-4 text-gray hover:text-gray-400">
              <button className="inline-flex items-center gap-1" 
              onClick={(e) => copyToClipboard(e, CONTACT.email, "Email")}
              >{CONTACT.email} <MdContentCopy /></button><Toaster />
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
