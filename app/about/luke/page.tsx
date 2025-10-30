"use client";

import Image from "next/image";
import { getLukeProjects } from "@/app/data/projects";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/app/components/ProjectModal";
import { WorkProject } from "@/app/data/projects";
import Link from "next/link";

export default function AboutLuke() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );

  const handleProjectClick = (project: WorkProject) => {
    const isMrToadsWildRide = project.title.includes("Mr. Toad's Wild Ride");
    setSelectedProject(
      isMrToadsWildRide ? { ...project, comingSoon: false } : project
    );
    setIsModalOpen(true);
  };

  return (
    <main className="w-full pb-36">
      <section className="w-11/12 max-sm:w-full px-16 py-12 max-sm:px-4 max-sm:py-8">
        <div className="flex w-full flex-col lg:flex-row gap-12 max-sm:gap-8 items-start">
          {/* Left Column - Vertical Image */}
          <div className="flex justify-start lg:justify-start max-sm:w-full">
            <div className="relative w-110 h-160 max-sm:w-full max-sm:h-120 max-md:w-80 max-md:h-96 overflow-hidden rounded-sm">
              <Image
                src="/images/aboutPage/luke.jpg"
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
                Luke Clarke
              </h1>
              <div className="flex flex-row gap-2 text-xl">
                <h2 className=" text-gray-300 font-light">b. 2001 /</h2>
                <Link
                  href="/about/lukeCV.pdf"
                  target="_blank"
                  className=" font-light text-amber-200 hover:text-amber-400 transition-all duration-70 ease-in-out"
                >
                  Resume
                </Link> / 
                <Link
                  href="https://www.linkedin.com/in/luke-clarke-a547862b5/"
                  target="_blank"
                  className="ont-light text-amber-200 hover:text-amber-400 transition-colors duration-70 ease-in-out"
                >
                  LinkedIn
                </Link> / 
                <Link
                  href="https://www.instagram.com/lukejosephclarke/"
                  target="_blank"
                  className="font-light text-amber-200 hover:text-amber-400 transition-colors duration-70 ease-in-out"
                >
                  Instagram
                </Link>
              </div>
              <div className="flex flex-row gap-4 mt-2 text-xl ">
                
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4 text-lg">
              <p className="text-gray-300 leading-relaxed">
                Since the age of 14, Luke Clarke has garnered experience in
                nearly all facets of filmmaking, videography, and media
                production. Whether it be his time in sports broadcast, public
                access, documentary, competitive dance videography, social media
                advertising, music video direction, or award winning narrative
                filmmaking, his eclectic body of work has become emblematic of a
                hardworking team-player and creative ready to tackle any subject
                matter at hand.
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
                    Through marrying the comedic and dramatic sides of narrative
                    filmmaking & documentary with the medium's oldest and newest
                    techniques, Luke has evolved into an artist devoted to
                    portraying the stories of the modern age. This unique blend
                    of tones and styles has manifested itself into a
                    wide-ranging body of work, spanning numerous genres and
                    disciplines. From the feature length lampooning of internet
                    personalities in the 2021 mockumentary Chet Larson, to the
                    abstract representation of modern media's isolating effects
                    in the music video to President TV of the United States
                    single Did, Luke’s directorial efforts reflect the state of
                    today’s society in a way only possible from someone who has
                    grown up inside of it.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Luke has also been able to apply his artistic sensibilities
                    into other mediums as well. From his photography and art
                    direction work for the ambient EP Artifice by electronic
                    musician Perky, to his role as an executive producer on Roxy
                    Phantom’s debut studio album So Much, Luke’s eclectic nature
                    as an artist ready to explore new disciplines makes him a
                    well rounded creative able to adapt to any situation.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Outside of the projects he’s spearheaded, Luke’s talents in
                    the world of filmmaking and videography extend into a number
                    of different avenues. In 2015, he began volunteering at the
                    Montgomery Community Media television station in nearly
                    every position available. This led him to winning the award
                    for Best Student Production at their in-house Monty Awards
                    in 2019 after becoming a certified producer for the station.
                    His time here helped transform him into an invaluable team
                    player in almost any role in front of or behind the camera.
                    This can be seen in his work on over 60 live sports
                    broadcasts for Seminole Productions, in his camera and
                    editing work on several video interviews made for WVFS
                    Tallahassee, and many more. Regardless of position, Luke has
                    proven himself to be a devoted, versatile, and durable team
                    player ready to step into any position that’s required.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Whether it be in his work as a writer, director, producer,
                    actor, editor, cinematographer, photographer, musician,
                    documentarian, or crew member, Luke has been able to apply
                    his naturally embedded sense of rhythm and direction into
                    every project he has worked on. To learn more about his
                    work, explore the projects below.
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
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-white mb-4">
                Highlight Reel
              </h3>
              <div className="w-full">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-sm"
                    src="https://www.youtube.com/embed/NqHpkTqqbLE?si=c1_9YhJsoTfcz5Wr"
                    title="Luke Clarke Highlight Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Works Section */}
            <div className="space-y-4 max-sm:w-full">
              <h3 className="text-3xl font-medium text-white mb-4">
                Notable Work
              </h3>
              <div className="flex flex-wrap gap-4 max-sm:flex-col max-sm:w-full">
              {getLukeProjects()
                .slice()
                .sort((a, b) => {
                  const desiredOrder = [
                    "Convenience",
                    "The Small Victorian Boy",
                    "Chet Larson",
                    "Yell Occult - Mr. Toad's Wild Ride (Music Video)",
                    "Chet Larson Coda",
                    "President TV of The United States - Did (Official Music Video)",
                    "The Energy Solution - Talk to Me (Official Music Video)",
                    "Mountains",
                    "The Energy Solution - The End of 2010 (Official Music Video)",
                    "Let's Talk Moco: Visarts Center",
                    "Artifice CD Art Direction",
                    "FSU Club Softball Feature",
                  ];
                  const indexA = desiredOrder.indexOf(a.title);
                  const indexB = desiredOrder.indexOf(b.title);
                  const normA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
                  const normB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
                  return normA - normB;
                })
                .map((project) => (
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
