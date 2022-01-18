import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UsersRepositories'
import { classToPlain, instanceToPlain } from 'class-transformer'

class ListUsersService {
  async execute() {
    const userRepository = getCustomRepository(UserRepositories)

    const user = await userRepository.find()

    return instanceToPlain(user)
  }
}
export { ListUsersService }
