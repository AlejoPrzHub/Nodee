const{Router, request} = require("express");
const router = Router();
const ProfessionalCtrl = require ("../controller/professional.controller")



router.get("/", ProfessionalCtrl.getStart );
router.get("/Professional", ProfessionalCtrl.getProfessional);
router.post("/Professional",ProfessionalCtrl.postProfessional)
router.put("/Professional", ProfessionalCtrl.putProfessional);
router.delete("/Professional", ProfessionalCtrl.delProfessional);

module.exports = router;
