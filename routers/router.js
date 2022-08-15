import { shortenUrl, customShortenUrl, redirectById } from "../controllers/shortenUrlController.js";
import express from "express";
const router = express.Router();

router.get("/:id", redirectById);
router.post("/url-shortener", shortenUrl);
router.post("/custom-shortener", customShortenUrl);

export default router;