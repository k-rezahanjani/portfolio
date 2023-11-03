import { getData } from "@/app/page";
import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();

        if (data.pageInfo) {
          setPageInfo(data.pageInfo);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        {pageInfo?.profilePic &&
        <motion.img 
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{x:0, opacity: 1}}
            viewport={{once: true}}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 sm:mt-14 xl:w-[400px] xl:h-[400px]"
            src={urlFor(pageInfo.profilePic).url()}
        />}

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a{" "} <span className="underline decoration-[#F7AB0A]/50">little </span>background</h4>
            <p className="text-sm">
              {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}
