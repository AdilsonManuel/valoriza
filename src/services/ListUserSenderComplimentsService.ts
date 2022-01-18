import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class ListUserSenderComplimentsService {
  async execute(user_id: string) {
    const complomentsRepository = getCustomRepository(ComplimentsRepositories)
    const compliments = await complomentsRepository.find({
      where: {
        userSender: user_id
      }
    })
    return compliments
  }
}
export { ListUserSenderComplimentsService }
