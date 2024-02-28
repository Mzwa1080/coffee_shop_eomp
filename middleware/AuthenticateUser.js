import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";

function createToken(user) {
    return jwt.sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '1h'
    });
}

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(' ')[1]; 
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({
                    status: "error",
                    msg: "please provide the correct credentials"
                });
            }
            req.user = user; 
            next();
        });
    } else {
        res.status(401).json({
            status: "error",
            msg: "No token provided"
        });
    }
}

export {
    createToken,
    verifyToken
};
