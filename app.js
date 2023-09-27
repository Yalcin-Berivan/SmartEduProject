const express = require("express");
const app = express();
//templete engine
app.set("view engine", "ejs");
//middlewares
app.use(express.static("public"));
//routes
app.get("/", (req, res) => {
  res.status(200).render("about",{
    page_name:"about"
  });
app.get("/", (req, res) => {
    res.status(200).render("index",{
        page_name:"index"
    });
  });
});
const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
