import express from "express";
import cors from "cors";
import {AppDataSource} from "./config/data-source";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.get("/", (req, res) => {
  res.json("SmarTec API is running");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
