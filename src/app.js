import express from "express";
import TasksRoutes from "./routes/tasks.routes";

const app = express();

// settings
app.set("port", process.env.port || 3000);

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Wellcome to my application!");
});

// routes
app.use("/api/tasks", TasksRoutes);

export default app;
