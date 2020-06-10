let express = require("express");
let router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */

// ดูข้อมูลผู้ใช้งาน
router.get("/", userController.index);

// ดูข้อมูลผู้ใช้งาน By ID
router.get("/:userId", userController.show);

// สร้างข้อมูลผู้ใช้งาน
router.post("/", userController.create);

// แก้ไขข้อมูลผู้ใช้งาน
router.put("/:userId", userController.editUserId);

// ลบชื่อข้อมูลผู้ใช้งาน
router.delete("/:userId", userController.deleteUser);

module.exports = router;
