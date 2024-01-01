"use client"
import { TabButton } from "@/app/components/tab_button";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className={"list-disc pl-2 "}>
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
    title: "Educação",
    id: "education",
    content: (
      <ul className={"list-disc pl-2"}>
        <li>Big Data no Agronegócio, Fatec Shunji Nishimura</li>
        <li>Ensino Técnico Integrado ao Médio, ETEC Prof Massuyuki Kawano</li>
      </ul>
    )
  },
  {
    title: "Certificados",
    id: "certifications",
    content: (
      <ul className={"list-disc pl-2"}>
        <li>
          <Link href={'https://drive.google.com/file/d/1Ou60-AhtZd52bBMjvwt0jcTQlIgIsDWy/view?pli=1'} target="_blank" >
            Discover path especializar, Rocketseat
          </Link>
        </li>
        <li>
          <Link href={'https://drive.google.com/file/d/1juFjmpspl0-TVuJ4dFBaoGoEYk70KN2m/view'} target="_blank" >
            Discover path conectar, Rocketseat
          </Link>
        </li>
        <li>
          <Link href={'https://drive.google.com/file/d/1tLnZEoHBHY374oIs_hU9D7kl4G7lUGiP/view'} target="_blank" >
            Semana Expert, Erick Wendel
          </Link>
        </li>
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
    <section id={"#about"} className={"text-white"}>
      <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>
        <Image src={"/images/about-image.jpg"} alt={"about image"} width={500} height={500} className="rounded-3xl" />
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
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificações
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Ensino
            </TabButton>
          </div>
          <div className={"mt-8 list-none"}>
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
