import { Router } from 'express';
import { getAllProjects, getSingleProject, getTechRelated } from './../controllers/projects.controller.js'

const router = Router();

router.get("/all", getAllProjects);
router.get("/single", getSingleProject);
router.get("/single/tech", getTechRelated);

export default router;