import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  id: number;
}

const ProjectCard = ({ title, description, id }: Props) => {
  return (
    <Link href={`question/${id}`} className="cursor-pointer">
      <div className="h-[150px] w-[200px] rounded-xl bg-slate-100 shadow-md">
        <div className="px-3 py-2 ">
          <p className="font-semibold line-clamp-1">{title}</p>
          <p className="line-clamp-3 mt-3 text-gray-500 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
