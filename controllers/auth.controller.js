import { serviceRegister, serviceLogin } from "../services/auth.service.js";

export const register = async (req, res) => {

    try {
        const result = await serviceRegister(req.body);
        return res.status(201).json({ success: true, ...result });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}



export const login = async (req, res) => {

    try {
        const result = await serviceLogin(req.body);
        return res.status(200).json({ success: true, ...result });
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
}