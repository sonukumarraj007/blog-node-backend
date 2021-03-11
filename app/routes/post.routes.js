module.exports = (app) => {
  const blogs = require("../controllers/post.controller.js");

  var router = require("express").Router();

  // Create a new Blog post
  router.post("/", blogs.create);

  // Retrieve all Blog post
  router.get("/", blogs.findAll);

  // Retrieve all published Blog post
  router.get("/published", blogs.findAllPublished);

  // Retrieve a single Blog post with id
  router.get("/:id", blogs.findOne);

  // Update a Blog post with id
  router.put("/:id", blogs.update);

  // Delete a Blog post with id
  router.delete("/:id", blogs.delete);

  // Create a new Tutorial
  router.delete("/", blogs.deleteAll);

  app.use("/api/blogs", router);
};
