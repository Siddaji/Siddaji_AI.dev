import express from "express";
import Project from "../models/project.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, description, githubLink, liveLink } = req.body;
    const newProject = new Project({ title, description, githubLink, liveLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error saving project", error });
  }
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

export default router;