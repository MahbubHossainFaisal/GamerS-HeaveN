import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Mahbub Hossain',
        email: 'mahbub@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
    {
        name: 'Farjana Islam',
        email: 'farjana@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
]

export default users