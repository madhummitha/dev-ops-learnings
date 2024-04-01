import express from "express";

const app = express();

app.get("/status", (req, res) => {
  res.json({ status: "Running" });
});

app.listen(3000, () => console.log("listening on port 3000"));
