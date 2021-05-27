import { IAddSurveyRepository } from '@/data/protocols'
import { IAddSurvey } from '@/domain/usecases'


export class DbAddSurvey implements IAddSurvey {
  constructor (private readonly addSurveyRepository: IAddSurveyRepository) {}

  async add (data: IAddSurvey.Params): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}
