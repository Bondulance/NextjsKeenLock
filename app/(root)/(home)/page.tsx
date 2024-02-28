import ProjectCard from "@/components/shared/ProjectCard";
import { getProjects } from "@/lib/actions/project.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const result = await getProjects();
  return (
    <>
      <section className="shadow-xl pt-12 ">
        <h1
          className="title-bold flex items-center
  justify-center flex-1 max-sm:text-[7vw] text-center flex-wrap"
        >
          A New Modern <span className="text-blue-100">&nbsp;Cloud&nbsp;</span>
          Code Storage
        </h1>

        <div className="mt-9 border-b-[3px] "></div>

        <p className="mt-4 font-semibold text-gray-500 items-center flex justify-center">
          For OrangesAreGreat10
        </p>

        <div className="mt-10 items-center justify-center flex pb-4">
          <Link href="https://github.com/OrangesAreGreat10" target="_blank">
            <Image
              alt="github"
              width={40}
              height={40}
              className="rounded-xl cursor-pointer"
              src="/icons/github-mark.png"
            />
          </Link>
        </div>

        <div className="mt-10 flex justify-center px-12">
          <p>Total Projects: {result.totalProjects} </p>
        </div>

        <div
          className="grid-cols-3 flex gap-7 mt-6 items-center 
        justify-center max-sm:grid-cols-1  max-md:flex-col 
        pb-10"
        >
          {result.projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
