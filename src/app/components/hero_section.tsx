"use client"
import Image from "next/image";
import {TextAnimation} from "@/app/components/type_animation";
import {motion} from "framer-motion";

export const HeroSection = () => {
  return (
    <section className={"lg:py-16"}>
      <div className={"grid grid-cols-1 sm:grid-cols-12"}>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className={"col-span-8 place-self-center text-center sm:text-left justify-self-start"}
        >
          <h1 className={"text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"}>
            <span className={"text-primary-500"}>Oi, eu sou {" "}</span>
            <br/>
            <TextAnimation/>
          </h1>
          <p className={"text-[#ADB7BE] text-base sm:text-lg lg:text-xl"}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
          <div>
            <button
              className={"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"}>
              Entrar em contato
            </button>
            <button
              className={"p-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"}>
              <span className={"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"}>
                Baixar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className={"col-span-4 place-self-center mt-4 lg:mt-0"}
          >
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            className={"rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"}>
            <Image
              src={"/images/hero-image.png"}
              alt={"hermo image"}
              className={"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

  )
}
