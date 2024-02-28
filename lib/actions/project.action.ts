"use server";
import Project from "@/database/project.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import { CreateProjectParams, ProjectbyIDParams } from "./shared.types";

export async function createProject(params: CreateProjectParams) {
  try {
    connectToDatabase();

    const { title, description, file, path } = params;

    // create question

    const project = await Project.create({
      title,
      description,
      file,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProjects() {
  try {
    connectToDatabase();

    const projects = await Project.find();

    const totalProjects = await Project.countDocuments();

    return { projects, totalProjects };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProjectsbyId(params: ProjectbyIDParams) {
  try {
    connectToDatabase();

    const { projectId } = params;

    const project = await Project.findById(projectId);

    return project;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
