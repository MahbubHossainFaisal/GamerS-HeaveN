import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
   
},{ // this will automatically create createdAt and updatedAt fields
    timestamps: true
})


userSchema.methods.matchPasswords = async function(enteredPassword){
    return bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model('User',userSchema)

export default User