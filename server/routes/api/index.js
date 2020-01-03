const router = require("express").Router();
const workspaceRoutes = require("./workspace");

router.use("/workspace", workspaceRoutes);

module.exports = router;
