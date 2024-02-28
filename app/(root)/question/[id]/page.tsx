import { getProjectsbyId } from "@/lib/actions/project.action";
import React from "react";

const page = async ({ params }: any) => {
  const result = await getProjectsbyId({ projectId: params.id });
  return (
    <>
      <h1>{result.title}</h1>
    </>
  );
};

export default page;
