const express = require("express");
const { newEmail, getAllEmail } = require("../controllers/emailController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/emails").post(newEmail);
router
    .route("/admin/emails").get(isAuthenticatedUser, authorizeRoles("admin"), getAllEmail);

module.exports = router;