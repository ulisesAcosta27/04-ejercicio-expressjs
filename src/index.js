const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
//en caso de tener un puerto definido por el servidor lo utiliza
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require("./routes/index"));
app.use("/api/datapost", require("./routes/datapost"));

//Creando el servidor
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
