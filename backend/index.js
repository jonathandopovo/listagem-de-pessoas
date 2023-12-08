const express = require("express");
const cors = require("cors");
const app = express();
const pessoaRoutes = require("./src/routes/pessoaRoutes");
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use("/api/pessoa", pessoaRoutes);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
