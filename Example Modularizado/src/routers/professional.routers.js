const{Router} = require("express");
const router = Router();
const ProfessionalCtrl = require ("../controller/professional.controller")

router.get("/", function(){ProfessionalCtrl.getProfessional} );
router.get("/Professional", function (){ProfessionalCtrl.getProfessional});
router.post("/Professional",function (){ProfessionalCtrl.postProfessional})
router.put("/Professional", function (){ProfessionalCtrl.putProfessional});
router.delete("/Professional", function (){ProfessionalCtrl.delProfessional});

module.exports = router;