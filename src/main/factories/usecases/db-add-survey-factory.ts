import { IAddSurvey } from '@/domain/usecases'
import { DbAddSurvey } from '@/data/usecases'
import { SurveyMongoRepository } from '@/infra/db'

export const makeDbAddSurvey = (): IAddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
