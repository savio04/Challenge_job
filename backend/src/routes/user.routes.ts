import { Router } from 'express'
import { AuthUserController } from '../Controllers/User/AuthUserController'
import { CreateUserController } from '../Controllers/User/CreateUserController'
export const UserRoute = Router()

UserRoute.post('/', CreateUserController)
UserRoute.post('/auth', AuthUserController)