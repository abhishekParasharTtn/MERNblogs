const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
require("dotenv").config();

const dbConnect = require("./config/dbConnect");
app.get("/", (req, res) => {
  res.send({ message: "Hello world from MERN Back end server" });
});

app.use("/api/blogs", require("./routes/blogsRoute"));
app.listen(port, () => console.log(`Backend server running on port ${port}`));
