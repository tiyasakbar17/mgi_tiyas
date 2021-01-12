const { First } = require("../controllers/First");
const { Second } = require("../controllers/Second");
const { Create, Read, Update, Delete } = require("../controllers/Third");

const router = require("express").Router();

router.get("/1", First);
router.get("/2", Second);

//Trird
router.post("/3", Create);
router.get("/3", Read);
router.patch("/3", Update);
router.delete("/3", Delete);

module.exports = router;
