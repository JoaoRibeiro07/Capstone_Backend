const{app} = require("../src/shared/shared");
const PORT = process.env.PORT || 5432;
  const userRoutes = require("../src/routes/userRoutes");
  app.use("/api/user", userRoutes);