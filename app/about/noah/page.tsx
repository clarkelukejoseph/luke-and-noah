"use client";

import Image from "next/image";
import { getNoahProjects } from "@/app/data/projects";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/app/components/ProjectModal";
import { WorkProject } from "@/app/data/projects";
import Link from "next/link";

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
      <section className="w-11/12 max-sm:w-full px-16 py-12 max-sm:px-4 max-sm:py-8">
        <div className="flex w-full flex-col lg:flex-row gap-12 max-sm:gap-8 items-start">
          {/* Left Column - Vertical Image */}
          <div className="flex justify-start lg:justify-start max-sm:w-full">
            <div className="relative w-110 h-160 max-sm:w-full max-sm:h-120 max-md:w-80 max-md:h-96 overflow-hidden rounded-sm">
              <Image
                src="/images/aboutPage/noah.jpg"
                alt="Noah"
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
              <div className="flex flex-row gap-2 text-xl">
                <h2 className="text-gray-300 font-light">b. 2001 /</h2>
                <Link
                  href="https://www.instagram.com/noahgclarke/"
                  target="_blank"
                  className="font-light text-amber-200 hover:text-amber-400 transition-colors duration-70 ease-in-out"
                >
                  Instagram
                </Link>
                /
                <Link
                  href="https://www.linkedin.com/in/noahgclarke/"
                  target="_blank"
                  className="font-light text-amber-200 hover:text-amber-400 transition-colors duration-70 ease-in-out"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4 text-lg">
              <p className="text-gray-300 leading-relaxed">
                Noah Clarke is a professional videographer, filmmaker and
                multimedia artist. In his decade of experience, Noah has worked
                with state legislators, athletes, small businesses, musicians
                and numerous organizations to bring their video ideas to life.
                Ranging from documentaries to live telecasts to social media
                posts to narrative works, the extent of Noah’s filmography
                speaks to his hardwork, versatility and ingenuity.
              </p>

              {/* Expanded Biography Content */}
              {isExpanded && (
                <div
                  className="space-y-4 animate-in fade-in duration-500 ease-out"
                  style={{
                    animation: "fadeIn 0.5s ease-out",
                  }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    Noah’s lifelong love of media led him to Montgomery
                    Community Media, a public access television station, while
                    he was in middle school. After spending years working across
                    all levels of production, Noah would become an award
                    winning, studio certified producer with the station while in
                    high school. It was also during this time that Noah started
                    his commercial career with Rita’s Italian Ice, creating
                    advertisements for their instagram page. All of this came to
                    a halt with the start of the COVID Pandemic, though, which
                    Noah would graduate high school into. He would use this
                    newfound free time to write, direct, produce, edit and star
                    in his own feature length mockumentary Chet Larson.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    He would graduate from Montgomery College shortly after this
                    and transfer to Florida State University, where he majored
                    in Digital Media Production and minored in Economics. While
                    in Florida, Noah led the Development Department at WVFS 89.7
                    FM, filmed live sports broadcasts with Seminole Productions
                    and created social media clips with Encompassed
                    Entertainment. He became the in-house videographer at the
                    National Hispanic Caucus of State Legislators during his
                    lone summer break, where he edited programs for air on the
                    HITN network. Since graduation, Noah has directed numerous
                    freelance projects and filmed live dance competitions across
                    the country with DanceBUG. Throughout it all, Noah has honed
                    his skills as a creator, a multitasker and a team member.
                    His body of work, which you can explore below, reflects
                    this.
                  </p>
                </div>
              )}

              {/* Read More/Less Button */}
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-amber-200 hover:text-amber-400 transition-colors ease-in-out underline duration-70 font-medium text-sm border-amber-200 hover:border-amber-400 p-0"
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
            <div className="space-y-4 max-sm:w-full">
              <h3 className="text-3xl font-medium text-white mb-4">
                Notable Work
              </h3>
              <div className="flex flex-wrap gap-4 max-sm:flex-col max-sm:w-full">
                {getNoahProjects().map((project) => (
                  <div key={project.id} className="max-sm:w-full">
                    <div className="relative w-40 h-60 max-sm:w-full max-sm:h-140 max-md:w-80 max-md:h-96 overflow-hidden rounded-sm cursor-pointer hover:opacity-90 transition-opacity duration-70">
                      <div onClick={() => handleProjectClick(project)}>
                        <Image
                          src={project.moviePoster || project.image[0]}
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
