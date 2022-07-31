const router = require ("express").Router()
const user = require("../controllers/user.controller")

router.post ("/register", user.register)
router.post ("/login", user.login)
router.post ("/activate", user.activate)
router.post ("/sendOTP", user.sendOTP)
router.post ("/changePassword", user.changePassword)
router.post ("/logout", user.logout)
router.post ("/logoutAll", user.logoutAll)
router.post ("/editPassword", user.editPassword)
router.post ("/deactivate", user.deactivate)
router.post ("/delAccount", user.delAccount)

module.exports = router 