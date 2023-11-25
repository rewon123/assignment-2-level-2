import express from 'express';
import { userController } from './user.controller';




const router = express.Router();

router.post('/api/users', userController.createUser);

router.get('/api/users', userController.getAllStudents);

router.get('/api/users/:userId', userController.getSingleStudent)

router.delete('/api/users/:userId', userController.deleteSingleUser)


router.put('/api/users/:userId', userController.updateSingleUser);

export const routerPath = router;