import { Request, Response } from 'express';
import { UserServices } from './user.service';


const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;

        const result = await UserServices.createUserIntoDB(user);
        res.status(200).json({
            success: true,
            message: 'User is created successfully',
            data: result,
        });
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

    try {
        const userId  = req.params.userId;

        const result = await UserServices.getSingleUserFromDB(userId);

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


const deleteSingleUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const result = await UserServices.deleteSingleUserFromDB((userId));

        if (result.deletedCount === 0) {
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
            message: 'User deleted successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};





const updateSingleUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const updatedUserData = req.body;
  
    try {
      const result = await UserServices.updateSingleUserInDB(userId, updatedUserData);
  
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
        message: 'User updated successfully',
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
    deleteSingleUser,
    updateSingleUser,
};