import { Router } from "express";
import {
    createVCardDetail,
    getVCardDetail,
    updateVCardDetail,
    deleteVCardDetail,
} from "../../controller/vCardDetail.js";


const router = Router();

router.route("/createvcarddetail").post(createVCardDetail);
router.route("/getvcarddetail").get(getVCardDetail);
router.route("/updatevcarddetail/:id").put(updateVCardDetail);
router.route("/deletevcarddetail/:id").delete(deleteVCardDetail);

export default router;
