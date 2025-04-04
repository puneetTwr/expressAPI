import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "User route" });
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: "User created", user: { name, email } });
});

export default router;
