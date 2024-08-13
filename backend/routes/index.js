const express = require('express');
const userRouter = require("./user")


const router = express.Router();
// const app = express();

router.use("/user", userRouter);


module.exports = router;