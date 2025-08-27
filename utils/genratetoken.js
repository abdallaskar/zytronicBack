
import jwt from "jsonwebtoken";

const generateToken = (userId, name, email) => {

    return jwt.sign(
        { id: userId, name, email },
        process.env.JWT_SECRET || "your_jwt_secret",
        { expiresIn: "30d" }
    );
}

export default generateToken;
