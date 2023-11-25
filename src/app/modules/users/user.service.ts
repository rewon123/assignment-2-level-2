import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  
  const result = await User.create(userData);
  return result
};



const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId });
  return result;
};


const deleteSingleUserFromDB = async (userId: string) => {
  const result = await User.deleteOne({ userId });
  return result;
};


const updateSingleUserInDB = async (userId: string, updatedUserData: TUser) => {
  const result = await User.findOneAndUpdate({ userId }, updatedUserData, {
    new: true
  });

  return result;
};




export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
  updateSingleUserInDB,
};