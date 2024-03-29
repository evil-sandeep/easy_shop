import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generatejwttoken.js'
import User from '../model/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password');
    }
})
// @desc   Get User Profile
// @route   GET /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,

        })
    } else {
        res.status(404)
        throw new Error('User Is Not Found')
    }
    console.log(`User Data Fatched Succesfully`.brightYellow.inverse)

})

// @desc   Register a new user
// @route   POST /api/users/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExits = await User.findOne({ email })


    if (userExits) {
        res.status(400)
        throw new Error('User Already Exists')
    }
    const user = await User.create({
        name, email, password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user Data');
    }
})
export { authUser, getUserProfile ,registerUser}