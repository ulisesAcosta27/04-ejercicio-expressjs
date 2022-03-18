const { Router } = require("express");
const req = require("express/lib/request");
const router = Router();
const _ = require("underscore");

const posts = require("../example.json");
console.log(posts);

router.get("/", (req, res) => {
  res.json(posts);
});

router.post("/", (req, res) => {
  const { title, autor, contents } = req.body;
  if (title && autor && contents) {
    const id = posts.length + 1;
    const newposts = { ...req.body, id };
    posts.push(newposts);
    res.json(posts);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, autor, contents } = req.body;
  if (title && autor && contents) {
    _.each(posts, (post, i) => {
      if (posts.id == id) {
        post.title = title;
        post.autor = autor;
        post.contents = contents;
      }
    });
    res.json(posts);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

//Underscore libreria para recorrer arreglos para crear o eliminar un objeto
router.delete("/:id", (req, res) => {
  //(req.params) nos da informacion de los parametros
  _.each(posts, (post, i) => {
    if (post.id == req.params.id) {
      posts.slice(i, 1);
    }
  });
  res.send("Deleted");
});

module.exports = router;
