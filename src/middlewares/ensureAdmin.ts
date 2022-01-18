import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin(request: Request, response, next) {
  const { user_id } = request

  const userRepository = getCustomRepository(UserRepositories)

  const { admin } = await userRepository.findOne(user_id)

  if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized'
  })
}
