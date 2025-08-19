"use client";

import Image from "next/image";
import { getRecentProjects } from "@/app/data/projects";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutLuke() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
            <h1 className="text-5xl font-medium text-white mb-2">Luke Clarke</h1>
            <h2 className="text-xl text-gray-300 font-light">b. 2001</h2>
          </div>

          {/* Biography */}
          <div className="space-y-4 text-base">
            <p className="text-gray-300 leading-relaxed">
              Through marrying the comedic and dramatic sides of narrative
              filmmaking with the medium's oldest and newest techniques, Luke
              Clarke has evolved into an artist devoted to portraying the
              stories of the modern age. This unique blend of tones and styles
              has manifested itself into an eclectic body of work, spanning
              numerous genres and disciplines. From the feature length
              lampooning of internet personalities in the 2021 mockumentary Chet
              Larson, to the abstract representation of modern media's isolating
              effects in the music video to President TV of the United States
              single Did, Luke's directorial efforts reflect the state of
              today's society in a way only possible from someone who has grown
              up inside of it.
            </p>

            {/* Expanded Biography Content */}
            {isExpanded && (
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Luke has also been able to apply his artistic talents and
                  instincts into other mediums as well. From his photography
                  work for the art direction of the ambient EP Artifice by
                  electronic musician Perky, to his executive production work on
                  Roxy Phantom’s debut studio album So Much, Luke’s eclectic
                  nature as an artist ready to explore and work in new
                  disciplines makes him a well rounded creative able to adapt to
                  any situation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Outside of the projects he’s spearheaded, Luke’s talents in
                  the world of filmmaking and videography extend into a number
                  of different avenues. In 2015, he began volunteering at the
                  Montgomery Community Media television station in nearly every
                  position available. This led him to winning the award for Best
                  Student Production at their in-house Monty Awards in 2019
                  after becoming a certified producer for the station. His time
                  here helped transform Luke into an invaluable team player in
                  almost any role in front of or behind the camera. This can be
                  seen in his work on over 60 live sports broadcasts for
                  Seminole Productions, in his camera and editing work on
                  several video interviews made for WVFS Tallahassee, and many
                  more. Regardless of position, Luke has proven himself to be a
                  devoted, versatile, and durable team player ready to step into
                  any position that’s required.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether it be in his work as a writer, director, producer,
                  actor, editor, cinematographer, photographer, musician,
                  documentarian, or crew member, Luke has been able to apply his
                  naturally embedded sense of rhythm and direction into every
                  project he has worked on. To learn more about his work,
                  explore the projects below.
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

          {/* Works Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-medium text-white mb-4">Work</h3>
            <div className="flex flex-row gap-4">
              {getRecentProjects().map((project) => (
                <div key={project.id}>
                  <div className="relative w-50 h-70 max-md:w-80 max-md:h-96 overflow-hidden rounded-sm">
                    <Link href={project.links[0].link} target="_blank">
                    <Image
                      src={project.image[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Reel */}
          <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
