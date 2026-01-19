import express from "express";
import controller from "../controllers/movieController.js";
import errorHandler from "../middlewares/errorHandler.js";
const router = express.Router();


// INDEX
router.get("/", controller.index)

// SHOW
router.get("/:id", controller.show)
// STORE

// UPDATE

// MODIFY

// DESTROY

export default router;