import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories)

    if (!email) {
      throw new Error('Email incorrect!!!')
    }
    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error('User already Exists!!!')
    }

    const user = usersRepository.create({ name, email, admin, password })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }