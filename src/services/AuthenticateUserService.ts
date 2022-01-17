import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UsersRepositories'

interface IAuthenticatedRequest {
  email: string
  password: string
}
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticatedRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    const user = await userRepository.findOne({
      email
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const token = sign(
      {
        email: user.email
      },
      'ec2dfc5b93d6d39e56e1927c70d57b04',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )
    return token
  }
}

export { AuthenticateUserService }
