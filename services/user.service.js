import User from '../models/user.model.js';



export const getAllUsersService = async () => {
    try {
        const users = await User.find({});
        return { data: users };
    } catch (error) {
        return { success: false, message: error.message };
    }
}
