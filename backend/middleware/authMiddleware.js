import jwt from 'jsonwebtoken'
import User from '../model/userModel.js'

const protect = async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SCRET)
            req.user = await User.findById(decoded.id).select('-password')
            console.log(req.user)
            next()
        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error('Invalid Token, Not authorised')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized , invalidtoken')
    }

}

export { protect } 