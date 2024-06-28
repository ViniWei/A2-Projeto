'use client';
import Dashboard from "@/components/Dashboard/Dashboard"
import { Inter } from "next/font/google";
import projectsService from "@/Services/projects.service";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [projects, setProjects] = useState([{id: "", name: "loading"}])
  const [currentProject, setCurrentProject] = useState({ id: "", name: "", cards: []})

  useEffect(() => {
      projectsService.getAll().then((res) => {
          setProjects(res.data);

          setCurrentProject(res.data[0])
      })
  }, [])

  return (
    <>
      <body className={inter.className}>
        <div className="home">
          <h1>{ currentProject ? currentProject.name : "Loading"}</h1> 

          <select name="projectSelect" id="projects">
          {projects.map((project) => {
              return (
                <option value={project.id}>{project.name}</option>
              );
              })}
          </select><br/>

          <input type="text" placeholder="Novo projeto"/>
          <button type="button">Adicionar</button>
          <Dashboard></Dashboard>
        </div>
      </body>
    </>
  );
}
