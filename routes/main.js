const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();
const ProjectController = require("../controllers/ProjectController.js");

router.get("/", (req, res) => {
  const data = req.context;
  const projectCtr = new ProjectController();
  projectCtr
    .get()
    .then((projects) => {
      data["projects"] = projects;
      res.render("landing", data);
    })
    .catch((err) => {
      res.send("Oops! +err.message");
    });
});

module.exports = router;
