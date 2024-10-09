import express from 'express';

import { UsersRoute } from '../domain/user-domain';

const router = express.Router();

router.use('/users', UsersRoute);

export default router;
