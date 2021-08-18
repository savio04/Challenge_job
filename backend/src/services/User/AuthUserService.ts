import { mongoose, userSchema } from "../../database";
import AppError from "../../errors/AppError";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IUserProps{
    _id?:string
    name:string
    email:string
    password:string
}

interface IAuthRequest{
    email:string
    password:string
}

export async function AuthUserService({ email,password }:IAuthRequest){
    const User = mongoose.model('users', userSchema, 'users')
    const userExisting = await User.findOne({email})
    if(!userExisting){
        throw new AppError("Email/password incrrect!")
    }
    const passworCompare = await compare(password, userExisting.password)
    
    if(!passworCompare){
        throw new AppError("Email/password incrrect!")
    }

    const token = sign({},String(process.env.TOKEN_AUTH),{
        subject:String(userExisting._id),
        expiresIn: "1d"
    })

    return{
        user:{
            name: userExisting.name,
            email: userExisting.email
        },
        token
    }
}