import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UserRepositories } from '../repositories/UsersRepositories'

interface IComplimentsRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentsService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message
  }: IComplimentsRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepostories = getCustomRepository(UserRepositories)

    if (user_sender == user_receiver) {
      throw new Error('Incorrect User Receiver !!')
    }
    const userReceiverExists = await userRepostories.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists!!')
    }

    const compliments = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepositories.save(compliments)

    return compliments
  }
}

export { CreateComplimentsService }
