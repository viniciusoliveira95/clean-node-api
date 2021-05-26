import { SurveyMongoRepository } from '@/infra/db'
import { ILoadSurveyById } from '@/domain/usecases'
import { DbLoadSurveyById } from '@/data/usecases'

export const makeDbLoadSurveyById = (): ILoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveyMongoRepository)
}
