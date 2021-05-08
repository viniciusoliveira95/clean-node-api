import { DbAddSurvey } from '../../../../../data/usecases/add-survey/db-add-survey'
import { AddSurvey } from '../../../../../domain/usecases/add-survey'
import { SurveyMongoRepoistory } from '../../../../../infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepoistory = new SurveyMongoRepoistory()
  return new DbAddSurvey(surveyMongoRepoistory)
}
