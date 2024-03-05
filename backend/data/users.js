import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Sandeep Kumar Sahoo  ',
        email: 'sandeep@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Sambit Kumar Sahoo',
        email: 'asambitdmin@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users