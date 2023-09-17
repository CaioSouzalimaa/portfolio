"use client"
import {ProjectCard} from "@/app/components/project_card";
import {ProjectTag} from "@/app/components/project_tag";
import {useState, useRef} from "react";
import {motion, useInView} from "framer-motion";

const projects = [
  {
    id: 1,
    imgUrl: "/images/projects/1.jpg",
    title: "React Portfolio Website",
    description: "Project 1 description",
    tags: ["Mobile"],
    githubUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    imgUrl: "/images/projects/1.jpg",
    title: "React Portfolio Website",
    description: "Project 2 description",
    tags: ["Web"],
    githubUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    imgUrl: "/images/projects/2.jpg",
    title: "React Portfolio Website",
    description: "Project 3 description",
    tags: ["Web"],
    githubUrl: "",
    previewUrl: "",
  }]

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  const handleTagChange = (tag: string) => {
    setTag(tag);
  }

  const filteredProjects = tag === "All" ? projects
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
        <ProjectTag tag={"All"} onClick={handleTagChange} isSelected={tag === "All"}/>
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
