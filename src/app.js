import express from "express";
import TasksRoutes from "./routes/tasks.routes";

const app = express();

app.set("port", process.env.port || 3000);

app.get("/", (req, res) => {
  res.json("Wellcome to my application!");
});

app.use('/api/tasks', TasksRoutes);

export default app;