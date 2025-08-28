"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import ProjectModal from "../components/ProjectModal";
import { workProjects, WorkProject } from "../data/projects";

// Extended project type with opacity for filtering
type ProjectWithOpacity = WorkProject & { opacity: number };

// Define the filter categories
const FILTER_CATEGORIES = [
  "Directing",
  "Writing", 
  "Producing",
  "Acting",
  "Editing",
  "Cinematography",
  "Photography",
  "Music",
  "Documentary",
  "Music Video"
];

export default function WorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Filter projects based on selected categories
  const filteredProjects: ProjectWithOpacity[] = useMemo(() => {
    if (selectedFilters.length === 0) return workProjects.map(project => ({ ...project, opacity: 1 }));
    
    return workProjects.map(project => {
      const hasMatchingGroup = selectedFilters.some(filter => {
        return project.groupings?.some(grouping => 
          grouping.group.includes(filter)
        );
      });
      
      return {
        ...project,
        opacity: hasMatchingGroup ? 1 : 0.1
      };
    });
  }, [selectedFilters]);

  const handleFilterClick = (filter: string) => {
    setSelectedFilters(prev => {
      if (prev.includes(filter)) {
        return prev.filter(f => f !== filter);
      } else {
        return [filter]; // Only allow 1 filter at a time
      }
    });
  };

  const handleProjectClick = (project: WorkProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main>
      <div>
        <Header />
        <div className="pt-16 pb-16 w-10/12 mx-auto ">
          {/* <h1 className="text-4xl text-white mb-12 text-center">Our Work</h1> */}
          
          {/* Filter Tabs - OLD IMPLEMENTATION (COMMENTED OUT) */}
          {/* <div className="mb-12 flex flex-row w-full">
            <div className="flex flex-wrap items-center justify-center mb-4 w-full">
              {FILTER_CATEGORIES.map((filter, index) => (
                <div key={filter} className="flex items-center">
                  <button
                    onClick={() => handleFilterClick(filter)}
                    className={`text-2xl font-normal transition-all duration-70 ${
                      selectedFilters.includes(filter)
                        ? " text-amber-400"
                        : " text-white hover:text-amber-400 transition-all duration-70 ease-in-out"
                    }`}
                  >
                    {filter}
                  </button>
                  {index < FILTER_CATEGORIES.length - 1 && (
                    <span className="text-white text-2xl mx-2">/</span>
                  )}
                </div>
              ))}
            </div>
          </div> */}

          {/* NEW: Fixed Bottom Filter Bar */}
          <div className="fixed bottom-0 left-0 right-0 z-50 mb-10">
            <div className="relative mx-auto w-fit">
              {/* Progressive Blur Container */}
              <div className="relative overflow-hidden rounded-full bg-black/70 backdrop-blur-md max-w-[500px] max-sm:max-w-[400px]">
                {/* Scrollable Filter Container - Shows 3 filters but allows scrolling */}
                <div 
                  className="flex items-center px-2 py-2 overflow-x-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                  onWheel={(e) => {
                    e.preventDefault();
                    const container = e.currentTarget;
                    container.scrollLeft += e.deltaY;
                  }}
                >
                  {FILTER_CATEGORIES.map((filter, index) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterClick(filter)}
                      className={`whitespace-nowrap text-xl max-sm:text-lg font-normal tracking-wide transition-all duration-70 ease-linear text-center rounded-full px-8 py-2 ${
                        selectedFilters.includes(filter)
                          ? "text-amber-400 bg-white/10"
                          : "text-white hover:text-amber-400"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                
                {/* Progressive Blur Overlays - Both Left and Right */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <WorkCard
                key={project.id}
                image={project.image[1] || project.image[0]}
                title={project.title}
                onClick={() => handleProjectClick(project)}
                opacity={project.opacity}
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
