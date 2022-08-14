import express from "express";
import { shortenUrl, customShortenUrl, findUrlById } from "./controllers/shortenUrlController.js";
const router = express.Router()



router.get("/:id", findUrlById);
router.post("/", shortenUrl);
router.post("/custom", customShortenUrl);

export default router;