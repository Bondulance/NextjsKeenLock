import { Schema, models, model, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  file: string;
}

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
