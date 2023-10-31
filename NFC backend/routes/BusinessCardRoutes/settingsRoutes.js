import { Router } from "express";
import {
    createSettings,
    getSettings,
    updateSettings,
    deleteSettings,
} from "../../controller/settingsController.js";


const router = Router();

router.route("/createsettings").post(createSettings);
router.route("/getsettings").get(getSettings);
router.route("/updatesettings/:id").put(updateSettings);
router.route("/deletesettings/:id").delete(deleteSettings);

export default router;
