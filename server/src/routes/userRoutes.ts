import { Router } from "express";
import { getUsers } from "../controllers/useController";
const router = Router();
router.get("/", getUsers);

export default router;
