const router = require("express").Router();
const authRoutes = require("./user");

router.use("/", authRoutes);

module.exports = router;
