import { Request, Response } from 'express';
import { UserServices } from './user.service';


const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;

        // will call service function to send this data
        const result = await UserServices.createUserIntoDB(user);
        res.status(200).json({
            success: true,
            message: 'User is created successfully',
            data: result,
        });
        // console.log(user, result)
    }
    catch (error) {
        res.status(500)
    }
}



const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.getAllUsersFromDB();
        res.status(200).json({
            success: true,
            message: 'User is laoded successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500)
    }
}


const getSingleStudent = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const result = await UserServices.getSingleUserFromDB(userId);
        console.log(result, 'asdasdad')
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    code: 404,
                    description: "User not found!"
                }
            });
        }
        res.status(200).json({
            success: true,
            message: 'User loaded successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};


export const userController = {
    createUser,
    getAllStudents,
    getSingleStudent,
};