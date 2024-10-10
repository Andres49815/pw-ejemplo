import express from 'express';

import { UsersRoute } from '../domain/user-domain';
import { GameRoute } from '../domain/game-domain';

const router = express.Router();

router.use('/users', UsersRoute);
router.use('/games', GameRoute);

export default router;
