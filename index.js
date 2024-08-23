const express = require("express");
const workingHoursMiddleware = require("./middleware/workinghours");

const app = express();
const port = 3030;

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(express.static("public"));

app.use(workingHoursMiddleware);

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Our Services" });
});

app.get("/contacts", (req, res) => {
  res.render("contacts", { title: "Contact Us" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
