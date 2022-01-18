import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UserRepositories } from '../repositories/UsersRepositories'

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complomentsRepository = getCustomRepository(ComplimentsRepositories)
    const compliments = await complomentsRepository.find({
      where: {
        userReceiver: user_id
      },
      relations: ['user_sender', 'user_receiver', 'tag']
    })
    return compliments
  }
}
export { ListUserReceiveComplimentsService }
