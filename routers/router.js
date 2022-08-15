import { shortenUrl, customShortenUrl, redirectById } from "../controllers/shortenUrlController.js";
import express from "express";
const router = express.Router();

router.get("/api/url-shortener/:id", redirectById);
router.post("/api/url-shortener/", shortenUrl);
router.post("/api/custom-shortener/", customShortenUrl);

export default router;