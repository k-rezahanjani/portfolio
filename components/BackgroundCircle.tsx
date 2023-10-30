import { motion } from 'framer-motion';

export default function BackgroundCircle() {
  return (
    <motion.div initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration: 2.5,
    }}
        className="relative flex justify-center items-center">
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52"/>
        <div className="rounded-full h-[400px] w-[400px] absolute border border-[#333333] mt-52"/>
        <div className="rounded-full h-[500px] w-[500px] absolute border border-[#333333] mt-52"/>
        <div className="rounded-full h-[600px] w-[600px] absolute border border-[#F7AB0A] mt-52 opacity-20 animate-pulse"/>
        {/* <div className="rounded-full h-[800px] w-[800px] absolute border border-[#333333] mt-52"/> */}
    </motion.div>
  )
}
