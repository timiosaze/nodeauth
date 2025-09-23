import { Router } from "express";
import { getCurrentUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
// router.get("/login", validateLoginInput, login);
// router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
