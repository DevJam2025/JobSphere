import userRoute from "./user.routes.js";

const setupRoutes = (app) => {
  app.use("/api/v1/user", userRoute);
};

export default setupRoutes;
