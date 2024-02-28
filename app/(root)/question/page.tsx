import Project from "@/components/form/Project";
import React from "react";

const page = () => {
  return (
    <section className="pt-12 shadow-xl flex flex-col">
      <h1 className="h1-bold justify-center items-center flex">
        Add a Project
      </h1>

      <div className="mt-12">
        <Project />
      </div>
    </section>
  );
};

export default page;
