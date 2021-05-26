import { LoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { DbLoadSurveys } from '@/data/usecases'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyMongoRepository)
}
