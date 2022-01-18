import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'
import { classToPlain, instanceToPlain } from 'class-transformer'

class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepositories)

    const tags = await tagsRepository.find()
    // tags = tags.map(tag => ({ ...tag, nameCustom: `#${tag.name}` }))

    return instanceToPlain(tags)
  }
}
export { ListTagsService }
