import express from "express";
import usersRouter from "./routes/user.routes.js";
import medicineRouter from "./routes/medicine.routes.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",

    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/meds", medicineRouter);

app.listen(3000, () => {
  console.log("App is listening on port 3000...");
});
