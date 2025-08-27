
import { getAllUsersService } from '../services/user.service.js'


export const getAllUsers = async (req, res) => {
    try {
        const result = await getAllUsersService();
        return res.status(200).json({ success: true, ...result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};