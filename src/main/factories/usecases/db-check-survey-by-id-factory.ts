import { SurveyMongoRepository } from '@/infra/db'
import { ICheckSurveyById } from '@/domain/usecases'
import { DbCheckSurveyById } from '@/data/usecases'

export const makeDbCheckSurveyById = (): ICheckSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbCheckSurveyById(surveyMongoRepository)
}
