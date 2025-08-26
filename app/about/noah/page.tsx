"use client";

import Image from "next/image";
import { getNoahProjects } from "@/app/data/projects";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/app/components/ProjectModal";
import { WorkProject } from "@/app/data/projects";
import Header from "@/app/components/Header";

export default function AboutNoah() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );

  const handleProjectClick = (project: WorkProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="w-full">
      <Header />
      
    <section className="w-11/12 px-16 py-12">
      <div className="flex w-full flex-col lg:flex-row gap-12 items-start">
        {/* Left Column - Vertical Image */}
        <div className="flex justify-start  lg:justify-start">
          <div className="relative w-110 h-160 max-md:w-80 max-md:h-96 overflow-hidden rounded-sm">
            <Image
              src="/images/test.jpeg"
              alt="Luke"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          {/* Name */}
          <div>
            <h1 className="text-5xl font-medium text-white mb-2">
              Noah Clarke
            </h1>
            <h2 className="text-xl text-gray-300 font-light">b. 2001</h2>
          </div>

          {/* Biography */}
          <div className="space-y-4 text-base">
            <p className="text-gray-300 leading-relaxed">
              My name is Noah Clarke, and I am a professional videographer,
              filmmaker and multimedia artist. Throughout my 10 years of
              experience, I have worked on creating documentaries, news
              packages, live telecasts, social media posts, commercials and
              narrative works.
            </p>

            {/* Expanded Biography Content */}
            {isExpanded && (
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I was born and raised in Montgomery County, Maryland. I had a
                  love of all things media growing up, and that led me to join
                  Montgomery Community Media, a local public access station,
                  while I was in middle school. I volunteered across all levels
                  of production for a number of years before eventually becoming
                  an award winning, studio-certified producer with the station
                  during my junior year of high school. It was also around this
                  time that I got my first videography job at a local Rita's
                  Italian Ice shop, where I created and posted several dozen
                  commercials on their instagram page. All of this came to a
                  halt with the start of the COVID pandemic, which I graduated
                  high school into. I would use my newfound free time during
                  this period to write, direct, edit, produce and star in my own
                  feature film Chet Larson.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I would graduate from Montgomery College a few months after
                  the film's premiere, where I was awarded the Board of
                  Trustee's scholarship for all semesters attended. I would go
                  on to attend Florida State University, where I majored in
                  Digital Media Production and minored in economics. During this
                  time, I became the director of development at the WVFS radio
                  station, where I helped the station secure their first
                  underwriting contracts since the start of the COVID Pandemic.
                  I was also a DJ with the announcing department, a critic with
                  the music department, and a videographer with the production
                  department. On behalf of the latter, I was sent to the SXSW
                  Festival in Austin, Texas to record interviews and
                  performances with various artists.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I participated in a number of other extracurricular activities
                  during my time at school. Notably, I was a crew member on
                  several dozen live sports telecasts with Seminole Productions
                  and DNA Studios, where I worked on games that were broadcast
                  on ESPN and ACCN. During my lone summer break from FSU, I
                  became the sole videographer at the National Hispanic Caucus
                  of State Legislators in DC. I created news packages that would
                  later air on the HITN Network and helped build up the
                  company's social media presence. Since graduation, I have been
                  focusing on freelance work and creating several projects of my
                  own, from short films to music videos to documentaries.
                </p>
              </div>
            )}

            {/* Read More/Less Button */}
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 transition-colors ease-in-out underline duration-200 font-medium text-sm border-blue-400 hover:border-blue-300 p-0"
              variant="link"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          </div>

          {/* Highlight Reel */}
          {/* <div className="space-y-4">
            <h3 className="text-3xl font-medium text-white mb-4">
              Highlight Reel
            </h3>
            <div className="w-full max-w-2xl">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-sm"
                  src="https://www.youtube.com/embed/zdRWojGVlIw?si=YzflErSNRWIMt-Jc"
                  title="Luke Clarke Highlight Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}

          {/* Works Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-medium text-white mb-4">Work</h3>
            <div className="flex flex-wrap gap-4">
              {getNoahProjects().map((project) => (
                <div key={project.id}>
                  <div className="relative w-40 h-60 max-md:w-80 max-md:h-96 overflow-hidden rounded-sm cursor-pointer hover:opacity-90 transition-opacity duration-200">
                    <div onClick={() => handleProjectClick(project)}>
                      <Image
                        src={project.image[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
    </main>
  );
}
