const { User } = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    console.log("Token recieved on backend: ", res.cookies.token);
    const token = req.cookies.token
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.JWT_TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            try {
                const user = await User.findById(data.id);
                if (user) return res.json({ status: true, user: user.username })
                else return res.json({ status: false })
            } catch (err) {
                console.error("Error in userVerification:", error);
                return res.status(500).json({ status: false, message: "Internal Server Error" });
            }

        }
    })
}