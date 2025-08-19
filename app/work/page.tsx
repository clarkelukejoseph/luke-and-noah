"use client";

import { useState } from "react";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import ProjectModal from "../components/ProjectModal";
import { workProjects, WorkProject } from "../data/projects";

export default function WorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const handleProjectClick = (project: WorkProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main>
      <div>
        <Header />
        <div className="pt-16 w-10/12 mx-auto ">
          {/* <h1 className="text-4xl text-white mb-12 text-center">Our Work</h1> */}
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProjects.map((project) => (
              <WorkCard
                key={project.id}
                image={project.image[1] || project.image[0]}
                title={project.title}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </main>
  );
}
