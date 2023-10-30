import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{x:0, opacity: 1}}
            viewport={{once: true}}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a{" "} <span className="underline decoration-[#F7AB0A]/50">little </span>background</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam iste adipisci ex dolor sit mollitia distinctio dolores, quos soluta at ratione nihil nulla. Corporis, cumque. Ab, delectus blanditiis! Ducimus.</p>
        </div>
    </motion.div>
  )
}
