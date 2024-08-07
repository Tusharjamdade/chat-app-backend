import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// Define the root route
router.get("/", (req: Request, res: Response) => {
  res.status(200).send({ response: "Server is up and running." });
});

export default router;
