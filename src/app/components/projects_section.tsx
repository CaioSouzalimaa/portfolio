"use client"
import { ProjectCard } from "@/app/components/project_card";
import { ProjectTag } from "@/app/components/project_tag";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    imgUrl: "/images/projects/attendance-list.png",
    title: "Lista de presença",
    description: "Lista de presença utilizando React",
    tags: ["Web"],
    githubUrl: "https://github.com/CaioSouzalimaa/Attendance-List",
    previewUrl: "",
  },
  {
    id: 2,
    imgUrl: "/images/projects/nlw-return.png",
    title: "Widget de feedback sobre problemas ou duvidas em seu site",
    description: "Um widget que possibilita o usuário enviar feedback para o desenvolvedor sobre problemas ou duvidas em seu site!",
    tags: ["Web"],
    githubUrl: "https://github.com/CaioSouzalimaa/NLW-RETURN",
    previewUrl: "https://nlw-return-chi-mauve.vercel.app/",
  },
  {
    id: 3,
    imgUrl: "/images/projects/desafio-newcon.png",
    title: "Teste de vaga Front-end (NewCon)",
    description: "Uma aplicação de página única (SPA) desenvolvida em React, implementando operações CRUD (Create, Read, Update, Delete) e consumindo uma API construída em ASP.NET Core",
    tags: ["Web"],
    githubUrl: "https://github.com/CaioSouzalimaa/teste-newcon",
    previewUrl: "",
  }]

export const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  const handleTagChange = (tag: string) => {
    setTag(tag);
  }

  const filteredProjects = tag === "Todos" ? projects
    : projects.filter(project => project.tags.includes(tag));

  const cardVariants = {
    initial: {
      opacity: 0,
      y:50,
    },
    animate: {
      opacity: 1,
      y:0,
    }
  }
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>

      <div className={"text-white flex flex-row justify-center items-center gap-2 py-6"}>
        <ProjectTag tag={"Todos"} onClick={handleTagChange} isSelected={tag === "Todos"}/>
        <ProjectTag tag={"Web"} onClick={handleTagChange} isSelected={tag === "Web"}/>
        <ProjectTag tag={"Mobile"} onClick={handleTagChange} isSelected={tag === "Mobile"}/>
      </div>
      <ul ref={ref} className={"grid md:grid-cols-3 gap-8 md:gap-12"}>
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial={"initial"}
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.4}}
            key={index}
          >
            <ProjectCard
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
