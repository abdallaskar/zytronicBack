
import User from '../models/user.model.js';
import generateToken from '../utils/genratetoken.js';


export const serviceRegister = async ({ name, email, password }) => {
    if (!name || !email || !password) {
        throw new Error("Please provide all required fields.");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("User already exists.");
    }
    try {
        const user = await User.create({ name, email, password });
        const token = generateToken(user._id, user.name, user.email);
        return { user: { id: user._id, name: user.name, email: user.email }, token };
    } catch (error) {
        throw new Error("User registration failed");
    }

}

export const serviceLogin = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("Please provide all required fields.");
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
        throw new Error("User does not exist.");
    }
    try {
        const isMatch = await userExists.matchPassword(password);
        if (!isMatch)
            throw new Error("Invalid credentials.");
        const token = generateToken(userExists._id, userExists.name, userExists.email);
        return { user: { id: userExists._id, name: userExists.name, email: userExists.email }, token };
    } catch (error) {
        throw new Error("User login failed");
    }

}