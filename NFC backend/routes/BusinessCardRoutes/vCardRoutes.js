import { Router } from "express";
const router = Router();

//Gender
import {
    createVCardDetail,
    getVCardDetail,
    updateVCardDetail,
    deleteVCardDetail,
} from "../../controller/vCardDetail.js";

router.route("/createVCardDetail").post(createVCardDetail);
router.route("/getVCardDetail").get(getVCardDetail);
router.route("/updateVCardDetail/:id").put(updateVCardDetail);
router.route("/deleteVCardDetail/:id").delete(deleteVCardDetail);

export default router;
