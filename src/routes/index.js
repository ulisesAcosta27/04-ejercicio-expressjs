const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    id: "0",
    title: "Creando una pagina web",
    autor: "@ulisesAcosta",
    contents: "Creando una pagina web con express"
  };
  res.json(data);
});

module.exports = router;
