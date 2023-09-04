"use client"
import Image from "next/image";
import {ReactNode, useState, useTransition} from "react";
import {TabButton} from "@/app/components/tab_button";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={"list-disc pl-2"}>
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>CSS</li>
        <li>Firebase</li>
      </ul>
    )
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className={"list-disc pl-2"}>
        <li>Big Data no Agronegócio, Fatec Shunji Nishimura</li>
        <li>Ensino Técnico Integrado ao Médio, ETEC Prof Massuyuki Kawano</li>
      </ul>
    )
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className={"list-disc pl-2"}>
        <li>Discover's path especializar, Rocketseat</li>
        <li>Discover's path conectar, Rocketseat</li>
        <li>Semana Expert, Erick Wendel</li>
      </ul>
    )
  },

]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id: string) => {
    isPending(() => {
      setTab(id);
    })
  }

  return (
    <section className={"text-white"}>
      <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>
        <Image src={"/images/about-image.png"} alt={"about image"} width={500} height={500}/>
        <div className={"mt-4 md:mt-0 text-left flex flex-col h-full"}>
          <h2 className={"text-4xl font-bold text-white mb-4"}>Sobre mim</h2>
          <p className={"text-base lg:text-lg"}>
            Sou um programador front-end apaixonado por React, TypeScript e JavaScript.
            Com habilidades em construir interfaces dinâmicas e responsivas, estou sempre em busca de desafios para
            aprimorar minhas habilidades.
          </p>
          <div className={"flex flex-row justify-start mt-8"}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificações
            </TabButton>
          </div>
          <div className={"mt-8"}>
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
