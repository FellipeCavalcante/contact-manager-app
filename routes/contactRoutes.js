const express = require("express");
const router = express.Router();
const {
  getContact,
  createContacts,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenhandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContacts);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;
