import { Router } from "express";
const router = Router();

/** POST Methods */
router.route('/register').post((req, res) => res.json('register route'))

/** GET Methods */

/** Put Methods */


export default router;