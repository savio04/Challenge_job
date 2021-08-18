import { mongoose, userSchema } from "../../database";
import bcrypt from 'bcrypt'
import AppError from "../../errors/AppError";

interface IRequestUser{
    name:string
    email:string
    password:string
}

export async function CreateUserService({name, email, password}:IRequestUser){
    const User = mongoose.model('users', userSchema, 'users')
    const userExisting = await User.findOne({email})

    if(userExisting){
        throw new AppError("User already exsists")
    }
    const passwordHash = await bcrypt.hash(password,10)

    const user = new User({name,email,password:passwordHash})

    try{
        await user.save()
    }catch(err){
        throw new AppError(`${err}`)
    }
}