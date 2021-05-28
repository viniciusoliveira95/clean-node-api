import { SurveyMongoRepository } from '@/infra/db'
import { ILoadAnswersBySurvey } from '@/domain/usecases'
import { DbLoadAnswersBySurvey } from '@/data/usecases'

export const makeDbLoadAnswersBySurvey = (): ILoadAnswersBySurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurvey(surveyMongoRepository)
}
